// src/screens/GameScreenLocal.js

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { GameProvider } from '../context/GameContext';
import Board from '../components/Board';

export default function GameScreenLocal() {
  return (
    <GameProvider>
      <SafeAreaView className='bg-[#f0dab1] flex-1 justify-center items-center'>
        <Board />
      </SafeAreaView>
    </GameProvider>
  );
}


