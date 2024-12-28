import React from 'react';
import { View, StyleSheet } from 'react-native';

const Piece = ({ piece }) => {
  if (!piece) {
    return null; // Pas de pion, case vide
  }

  // Couleur : Blanc ou Noir
  const colorStyle = piece.owner === 'WHITE' ? styles.whitePiece : styles.blackPiece;

  return (
    <View style={[styles.piece, colorStyle]} />
  );
};

const styles = StyleSheet.create({
  piece: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  whitePiece: {
    backgroundColor: '#fff',
  },
  blackPiece: {
    backgroundColor: '#000',
  },
});

export default Piece;
