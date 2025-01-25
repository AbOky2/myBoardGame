import React from 'react';
import { View } from 'react-native';

const Piece = ({ piece }) => {
  if (!piece) {
    return null; // Pas de pion, case vide
  }

  // Couleur : Blanc ou Noir
  const colorClass = piece.owner === 'WHITE' ? 'bg-white' : 'bg-black';

  return (
    <View className={`w-10 h-10 rounded-full ${colorClass}`} />
  );
};

export default Piece;