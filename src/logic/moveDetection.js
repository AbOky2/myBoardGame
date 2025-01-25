// src/logic/moveDetection.js
import { BoardModel } from '../models/BoardModel';
/**
 * moveDetection : vérifie si le joueur "color" peut déplacer le pion ou pas
 *.
 *
 * @param {BoardModel} board
 * @param {number} startRow
 * @param {number} startCol
 * @param {number} endRow
 * @param {number} endCol
 * @param {string} color - 'WHITE' ou 'BLACK'
 * @return {boolean}
 */

export function canPlayerMove(board, color) {
  const rows = board.constructor.ROWS;
  const cols = board.constructor.COLS;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const piece = board.grid[r][c];
      if (piece && piece.owner === color) {
        // Vérifier autour (r-1,c), (r+1,c), (r,c-1), (r,c+1)
        if (isFree(board, r - 1, c) || 
            isFree(board, r + 1, c) ||
            isFree(board, r, c - 1) ||
            isFree(board, r, c + 1)) 
        {
          return true; // Au moins un coup possible
        }
      }
    }
  }
  return false;
}

function isFree(board, row, col) {
  // Vérifie si [row,col] est dans les limites et vide
  if (row < 0 || row >= board.constructor.ROWS) return false;
  if (col < 0 || col >= board.constructor.COLS) return false;
  return board.grid[row][col] === null;
}
