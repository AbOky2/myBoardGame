// Board.js
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { GameContext } from '../context/GameContext';
import Cell from './Cell';

const Board = () => {
  const { gameState, handleCellPress } = useContext(GameContext);
  const { board } = gameState;

  return (
    <View style={styles.boardContainer}>
      {board.grid.map((rowData, row) => (
        <View style={styles.row} key={`row-${row}`}>
          {rowData.map((cellData, col) => (
            <Cell
              key={`cell-${row}-${col}`}
              row={row}
              col={col}
              piece={cellData}
              onPress={handleCellPress}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  boardContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});

export default Board;
