// Board.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameContext } from '../context/GameContext';
import Cell from './Cell';

export default function Board() {
  const { gameState, handleCellPress } = useContext(GameContext);
  const { board, currentPlayer } = gameState;
  const currentPlayerText = currentPlayer === 'WHITE' ? 'Blancs' : 'Noirs';

  return (
    <View style={styles.container}>
      <Text style={styles.playerInfo}>
        Au tour des {currentPlayerText}
      </Text>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  playerInfo: {
    fontSize: 18,
    marginBottom: 12,
  },
  boardContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});
