import { BoardModel } from './BoardModel';
import { Player, PlayerColor } from './PlayerModel';

export const GamePhase = {
    PLACEMENT: 'PLACEMENT',
    MOVEMENT: 'MOVEMENT',
    REMOVAL: 'REMOVAL', // phase de retrait
    ENDED: 'ENDED', // nouvelle phase de fin de partie

  };
  
  export class GameState {
    constructor() {
      this.board = new BoardModel();
      this.player1 = new Player(PlayerColor.WHITE);
      this.player2 = new Player(PlayerColor.BLACK);
      this.currentPlayer = PlayerColor.WHITE;
      this.phase = GamePhase.PLACEMENT;
  
      this.pionsRestantsBlanc = 12;
      this.pionsRestantsNoir = 12;
  
      // Pour la phase RETRAIT
      this.needToRemoveOpponentPiece = false;
  
      // Pour la phase ENDED
      this.winner = null; // 'WHITE' ou 'BLACK' ou 'DRAW'
    }
  }
  
