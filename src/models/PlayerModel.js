export const PlayerColor = {
    WHITE: 'WHITE',
    BLACK: 'BLACK',
  };
  
  export class Player {
    constructor(color) {
      this.color = color;         // 'WHITE' ou 'BLACK'
      this.piecesOnBoard = 0;     // Compteur de pions sur le plateau
    }
  }
  