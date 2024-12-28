// src/logic/movementRules.js

/**
 * canMove : vérifie si le joueur "color" peut déplacer le pion
 * de (startRow, startCol) à (endRow, endCol).
 *
 * @param {BoardModel} board
 * @param {number} startRow
 * @param {number} startCol
 * @param {number} endRow
 * @param {number} endCol
 * @param {string} color - 'WHITE' ou 'BLACK'
 * @return {boolean}
 */
export function canMove(board, startRow, startCol, endRow, endCol, color) {
    const rows = board.constructor.ROWS;
    const cols = board.constructor.COLS;
  
    // Vérifier que les indices sont dans la grille
    if (
      startRow < 0 || startRow >= rows ||
      startCol < 0 || startCol >= cols ||
      endRow < 0 || endRow >= rows ||
      endCol < 0 || endCol >= cols
    ) {
      return false;
    }
  
    const startPiece = board.grid[startRow][startCol];
    const endPiece = board.grid[endRow][endCol];
  
    // Vérifier qu'il y a bien un pion à l'origine et qu'il appartient à "color"
    if (!startPiece || startPiece.owner !== color) {
      return false;
    }
  
    // Vérifier que la destination est libre
    if (endPiece !== null) {
      return false;
    }
  
    // Vérifier le déplacement orthogonal d’une seule case
    const rowDiff = Math.abs(endRow - startRow);
    const colDiff = Math.abs(endCol - startCol);
    if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
      // Déplacement valide (une seule case orthogonale)
      return true;
    }
  
    return false;
  }
  