// src/screens/HomeScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Logo du jeu : adapter le require(...) à votre asset */}
      <Image 
        source={require('../../assets/favicon.png')} 
        style={styles.logo}
      />

      <Text style={styles.title}>Mon Jeu</Text>

      {/* Bouton : Jouer en local à 2 */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('GameLocal')}
      >
        <Text style={styles.buttonText}>Jouer à 2 en local</Text>
      </TouchableOpacity>

      {/* Bouton : Jouer contre l'ordinateur */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('GameAI')}
      >
        <Text style={styles.buttonText}>Jouer contre l'ordinateur</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0dab1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#8B4513',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
