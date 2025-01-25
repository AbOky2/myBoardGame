// src/screens/GameScreenAI.js

import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import "../../global.css";
// import { GameProviderAI } from '../context/GameContextAI'; (exemple)

export default function GameScreenAI() {
  return (
    // <GameProviderAI> // si vous avez un context spécial IA
    <SafeAreaView className="bg-purple-500 flex-1 justify-center items-center">
      <Text className="text-red-400 text-2xl">Partie contre l’IA (WIP2)</Text>
    </SafeAreaView>
    // </GameProviderAI>
  );
}

