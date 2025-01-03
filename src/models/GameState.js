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
      this.phase = GamePhase.PLACEMENT;

       // Pour la pose initiale
       this.pionsAPlacerBlanc = 12;
       this.pionsAplacerNoir = 12;
 
       //Pour la phase de retrait
       this.pionsSurPlateauBlanc = 0;
       this.pionSurPlateauNoir = 0;
    
      this.currentPlayer = PlayerColor.WHITE;
       // Pour la phase RETRAIT
       this.needToRemoveOpponentPiece = false;
  
       // Pour la phase ENDED
       this.winner = null; // 'WHITE' ou 'BLACK' ou 'DRAW'

       this.board = new BoardModel();
      this.player1 = new Player(PlayerColor.WHITE);
      this.player2 = new Player(PlayerColor.BLACK);
     
    }
  }
  
