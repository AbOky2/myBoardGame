// src/components/Cell.js

import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
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
    <TouchableOpacity style={styles.cell} onPress={handlePress}>
      <View style={styles.innerContainer}>
        {piece ? <Piece piece={piece} /> : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 60,
    height: 60,
    backgroundColor: '#b58863',  // Couleur "échiquier"
    borderWidth: 1,
    borderColor: '#4b3829',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Cell;
