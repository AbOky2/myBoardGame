// src/logic/placementRules.js
import { alignmentChecker } from './alignmentChecker';
import { Piece } from '../models/PieceModel';

/**
 * canPlace : vérifie si on peut placer un pion de "color" dans
 * la case (row, col) sans créer d’alignement de 3.
 *
 * @param {BoardModel} board
 * @param {number} row
 * @param {number} col
 * @param {string} color - 'WHITE' ou 'BLACK'
 * @return {boolean} - true si autorisé, false si cela crée un alignement
 */
export function canPlace(board, row, col, color) {
  // Case déjà occupée ?
  if (board.grid[row][col] !== null) {
    return false;
  }

  // Placer temporairement
  board.grid[row][col] = new Piece(color);

  // Vérifier alignement
  const createsAlignment = alignmentChecker(board, color);

  // Annuler le placement temporaire
  board.grid[row][col] = null;

  // Si un alignement est créé, on refuse
  return !createsAlignment;
}
