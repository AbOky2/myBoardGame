import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { GameProvider } from './src/context/GameContext';
import Board from './src/components/Board';

export default function App() {
  return (
    <GameProvider>
      <SafeAreaView style={styles.container}>
        <Board />
      </SafeAreaView>
    </GameProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0dab1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
