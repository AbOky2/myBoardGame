import { View, Text, Modal, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Board from '../components/Board';
import { GameContext } from '../context/GameContext';
import { GamePhase } from '../models/GameState';

const InnerGameScreenLocal = () => {
    const {gameState} = useContext(GameContext);

  const [showPhaseModal, setShowPhaseModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() =>{
      // Chaque fois que la phase change, on configure le modal
      if (gameState.phase === GamePhase.PLACEMENT) {
        setModalTitle("Phase de placement");
        setModalMessage("Vous êtes en phase de placement !");
        setShowPhaseModal(true);
      } else if (gameState.phase === GamePhase.MOVEMENT) {
        setModalTitle("Phase de mouvement");
        setModalMessage("Vous pouvez déplacer vos pions !");
        setShowPhaseModal(true);
      } else if (gameState.phase === GamePhase.REMOVAL) {
        setModalTitle("Phase de retrait");
        setModalMessage("Retirez un pion adverse si alignement !");
        setShowPhaseModal(true);
      } else if (gameState.phase === GamePhase.ENDED) {
        setModalTitle("Partie terminée");
        setModalMessage(`Le vainqueur est ${gameState.winner || "?"}`);
        setShowPhaseModal(true);
      }
  }, [gameState.phase]);
  return (
    <SafeAreaView className='bg-[#f0dab1] flex-1 justify-center items-center'>          
        <Board />

        <Modal
        transparent={true}
        visible={showPhaseModal}
        animationType="fade"
        onRequestClose={() => setShowPhaseModal(false)}
      >
        <View className="flex-1 bg-black/50 justify-center items-center">
          <View className="bg-white p-4 rounded-md w-3/4">
            <Text className="text-lg font-bold mb-2">{modalTitle}</Text>
            <Text className="mb-4">{modalMessage}</Text>
            <TouchableOpacity
              className="bg-blue-500 px-4 py-2 rounded-md"
              onPress={() => setShowPhaseModal(false)}
            >
              <Text className="text-white font-bold">OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </SafeAreaView>
  )
}

export default InnerGameScreenLocal