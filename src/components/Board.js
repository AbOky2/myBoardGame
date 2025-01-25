import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { GameContext } from '../context/GameContext';
import Cell from './Cell';

export default function Board() {
  const { gameState, handleCellPress } = useContext(GameContext);
  const { board, currentPlayer } = gameState;
  const currentPlayerText = currentPlayer === 'WHITE' ? 'Blancs' : 'Noirs';

  return (
    <View className="flex items-center">
      <Text className="text-lg mb-3">
        Au tour des {currentPlayerText}
      </Text>

      <View className="flex flex-col">
        {board.grid.map((rowData, row) => (
          <View className="flex flex-row" key={`row-${row}`}>
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