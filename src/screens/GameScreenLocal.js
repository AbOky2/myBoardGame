// src/screens/GameScreenLocal.js

import React from 'react';
import { GameProvider } from '../context/GameContext';
import InnerGameScreenLocal from './InnerGameScreenLocal';

export default function GameScreenLocal() {
  
  return (
    <GameProvider>
      <InnerGameScreenLocal/>
    </GameProvider>
  );
}


