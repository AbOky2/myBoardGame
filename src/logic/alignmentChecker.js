// src/logic/alignmentChecker.js

/**
 * alignmentChecker : renvoie true s’il existe au moins
 * un alignement de 3 pions pour la couleur "color".
 *
 * @param {BoardModel} board - instance de votre BoardModel
 * @param {string} color - 'WHITE' ou 'BLACK'
 * @return {boolean}
 */
export function alignmentChecker(board, color) {
    const rows = board.constructor.ROWS;
    const cols = board.constructor.COLS;
    const grid = board.grid;
  
    // Vérification horizontale
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c <= cols - 3; c++) {
        const p1 = grid[r][c];
        const p2 = grid[r][c + 1];
        const p3 = grid[r][c + 2];
        if (
          p1 && p2 && p3 &&
          p1.owner === color &&
          p2.owner === color &&
          p3.owner === color
        ) {
          return true;
        }
      }
    }
  
    // Vérification verticale
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r <= rows - 3; r++) {
        const p1 = grid[r][c];
        const p2 = grid[r + 1][c];
        const p3 = grid[r + 2][c];
        if (
          p1 && p2 && p3 &&
          p1.owner === color &&
          p2.owner === color &&
          p3.owner === color
        ) {
          return true;
        }
      }
    }
  
    return false;
  }
  