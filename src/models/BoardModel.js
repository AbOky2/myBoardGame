import { Piece } from './PieceModel';

export class BoardModel {
  static ROWS = 6;
  static COLS = 6;

  constructor() {
    this.grid = Array.from({ length: BoardModel.ROWS }, () =>
      Array.from({ length: BoardModel.COLS }, () => null)
    );
  }

  placePiece(color, row, col) {
    if (this.grid[row][col] === null) {
      this.grid[row][col] = new Piece(color);
      return true;
    }
    return false;
  }

  movePiece(startRow, startCol, endRow, endCol) {
    if (
      this.grid[startRow][startCol] !== null &&
      this.grid[endRow][endCol] === null
    ) {
      this.grid[endRow][endCol] = this.grid[startRow][startCol];
      this.grid[startRow][startCol] = null;
      return true;
    }
    return false;
  }

  removePiece(row, col) {
    this.grid[row][col] = null;
  }
}
