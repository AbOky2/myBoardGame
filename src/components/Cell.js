import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Piece from './Piece';

const Cell = ({ row, col, piece, onPress }) => {
  /**
   * row, col : indices de la cellule dans la grille
   * piece : objet représentant le pion (ou null s’il n’y a pas de pion)
   * onPress : callback pour gérer l’action lorsque l’utilisateur touche la cellule
   */

  const handlePress = () => {
    onPress(row, col);
  };

  return (
    <TouchableOpacity className="w-[60] h-[60] bg-[#b58863] border border-[#4b3829] justify-center items-center" onPress={handlePress}>
      <View className="flex-1 justify-center items-center">
        {piece ? <Piece piece={piece} /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default Cell;