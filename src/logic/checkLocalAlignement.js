/**
 * checkLocalAlignment : Vérifie si, autour de la case (row, col),
 * on peut trouver un alignement de 3 pions de la couleur "color"
 * dans la direction horizontale ou verticale.
 *
 * @param {BoardModel} board - instance de ton BoardModel (avec board.grid)
 * @param {number} row - la ligne de la case où le pion vient d'être posé/déplacé
 * @param {number} col - la colonne de la case où le pion vient d'être posé/déplacé
 * @param {string} color - 'WHITE' ou 'BLACK'
 * @return {boolean} true si un alignement de 3 est détecté, sinon false
 */
export function checkLocalAlignment(board, row, col, color) {
    const grid = board.grid;
    const maxRows = board.constructor.ROWS; // ex. 6
    const maxCols = board.constructor.COLS; // ex. 5
  
    // Vérification horizontale : on teste uniquement les séquences de 3 cases
    // qui peuvent inclure (row, col). Concrètement, on boucle de (col - 2) à (col),
    // et on regarde si (col), (col+1), (col+2) forment un triple, ou encore
    // (col-1), (col), (col+1), etc.
    for (let startCol = col - 2; startCol <= col; startCol++) {
      // On s'assure de rester dans les bornes du plateau
      if (startCol >= 0 && (startCol + 2) < maxCols) {
        const p1 = grid[row][startCol];
        const p2 = grid[row][startCol + 1];
        const p3 = grid[row][startCol + 2];
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
  
    // Vérification verticale : de même, on ne teste que les séquences
    // de 3 cases qui peuvent inclure (row, col). On boucle de (row - 2) à (row).
    for (let startRow = row - 2; startRow <= row; startRow++) {
      if (startRow >= 0 && (startRow + 2) < maxRows) {
        const p1 = grid[startRow][col];
        const p2 = grid[startRow + 1][col];
        const p3 = grid[startRow + 2][col];
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
  
    // Si rien n'est détecté, on retourne false
    return false;
  }
  