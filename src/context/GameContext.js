import React, { createContext, useState } from 'react';
import { GameState, GamePhase } from '../models/GameState';
import { alignmentChecker } from '../logic/alignmentChecker';
import { canMove } from '../logic/movementRules'; // si tu as une fonction canMove()
import { isAdjacent } from '../logic/isAdjacent';   // ou on la définit plus bas

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(new GameState());
  // Ajout d'un state pour mémoriser la cellule sélectionnée
  const [selectedCell, setSelectedCell] = useState(null); 
  // selectedCell pourra être { row, col } ou null

  const placePiece = (row, col) => {
    const newGameState = { ...gameState };
    const currentColor = newGameState.currentPlayer;

    // Tenter de placer le pion
    const success = newGameState.board.placePiece(currentColor, row, col);
    if (!success) return false; // case déjà occupée

    // Vérifier si alignement créé (phase de placement => alignement interdit)
    if (alignmentChecker(newGameState.board, currentColor)) {
      // Annuler le placement
      newGameState.board.removePiece(row, col);
      return false;
    }

    // Mettre à jour le nombre de pions restants
    if (currentColor === 'WHITE') {
      newGameState.pionsRestantsBlanc--;
    } else {
      newGameState.pionsRestantsNoir--;
    }

    // Passer en phase MOUVEMENT si tous les pions sont placés
    if (newGameState.pionsRestantsBlanc === 0 && newGameState.pionsRestantsNoir === 0) {
      newGameState.phase = GamePhase.MOVEMENT;
    }

    // Changer de joueur
    newGameState.currentPlayer = (currentColor === 'WHITE') ? 'BLACK' : 'WHITE';
    setGameState(newGameState);
    return true;
  };

  const movePiece = (startRow, startCol, endRow, endCol) => {
    
    // Vérifier que le pion est bien du currentPlayer, etc.
    // Ici, on peut vérifier l'adjacence ou appeler board.movePiece
    // en s'assurant que c'est légal.

    const newGameState = { ...gameState };
    const { board, currentPlayer } = newGameState;

    // 1) Vérifier qu'on est en phase mouvement
    if (newGameState.phase !== GamePhase.MOVEMENT) return false;

    // 2) Vérifier que la case de départ contient un pion du joueur courant
    const startPiece = board.grid[startRow][startCol];
    if (!startPiece || startPiece.owner !== currentPlayer) {
      return false;
    }

    // 3) Vérifier que la case de destination est vide et adjacente
    const endPiece = board.grid[endRow][endCol];
    if (endPiece !== null) {
      return false;
    }
    if (!isAdjacent(startRow, startCol, endRow, endCol)) {
      return false;
    }

    // 4) Effectuer le déplacement
    board.movePiece(startRow, startCol, endRow, endCol);

    // 5) Vérifier alignement de 3 => retirer un pion adverse si besoin
    if (alignmentChecker(board, currentPlayer)) {
      // Par exemple, tu peux activer un “mode retrait de pion” :
      newGameState.needToRemoveOpponent = true; 
      // ou retirer immédiatement un pion adverse (selon tes règles).
    }

    // 6) Changer de joueur
    newGameState.currentPlayer = (currentPlayer === 'WHITE') ? 'BLACK' : 'WHITE';

    // Réinitialiser la sélection
    setSelectedCell(null);
    setGameState(newGameState);
    return true;
  };

  /**
   * handleCellPress : callback principal pour un clic sur une cellule
   */
  const handleCellPress = (row, col) => {
    const newGameState = { ...gameState };
    const { phase, board, currentPlayer, needToRemoveOpponentPiece } = newGameState;

    if (newGameState.phase === GamePhase.ENDED) {
        return; 
      }

    if (needToRemoveOpponentPiece) {
        // Vérifier que la case cliquée a un pion adverse
        const clickedPiece = board.grid[row][col];
        if (clickedPiece && clickedPiece.owner !== currentPlayer) {
          // Retirer ce pion
          board.removePiece(row, col);
    
          // Mettre à jour le compteur de pions adverses si nécessaire
          if (clickedPiece.owner === 'WHITE') {
            newGameState.pionsRestantsBlanc--;
            if (newGameState.pionsRestantsBlanc <= 0) {
              // Le joueur NOIR gagne
              newGameState.phase = GamePhase.ENDED;
              newGameState.winner = 'BLACK';
            }
          } else {
            newGameState.pionsRestantsNoir--;
            if (newGameState.pionsRestantsNoir <= 0) {
              // Le joueur BLANC gagne
              newGameState.phase = GamePhase.ENDED;
              newGameState.winner = 'WHITE';
            }
          }
          // Fin de la phase de retrait
          newGameState.needToRemoveOpponentPiece = false;
          // => Changer de joueur
          newGameState.currentPlayer = (currentPlayer === 'WHITE') ? 'BLACK' : 'WHITE';
    
          // Vérifier si l’adversaire a encore des pions
          // => S’il n’en a plus, partie terminée
          // ...
        }
        setGameState(newGameState);
        return;
      }
  
    if (phase === GamePhase.PLACEMENT) {
      placePiece(row, col);
      return;
    }

    if (phase === GamePhase.MOVEMENT) {
      // 1) S'il n'y a pas encore de pion sélectionné
      if (!selectedCell) {
        const piece = board.grid[row][col];
        // Vérifier qu'il y a un pion et qu'il appartient au joueur courant
        if (piece && piece.owner === currentPlayer) {
          // On sélectionne ce pion
          setSelectedCell({ row, col });
        }
        return;
      }

      // 2) Si on a déjà un pion sélectionné => on tente de se déplacer
      const { row: selRow, col: selCol } = selectedCell;

      // Si la case cliquée est la même ou contient un pion qu'on ne veut pas remplacer
      // on peut simplement désélectionner
      if (selRow === row && selCol === col) {
        // L'utilisateur reclique sur la même case => annuler la sélection
        setSelectedCell(null);
        return;
      }

      // Tenter de déplacer
      movePiece(selRow, selCol, row, col);
    }
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        placePiece,
        movePiece,
        handleCellPress,    // expose la fonction
        selectedCell,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

/**
 * Simple helper : vérifie si (r1,c1) et (r2,c2) sont voisins orthogonaux
 */

