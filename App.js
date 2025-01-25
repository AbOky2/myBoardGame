// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import de vos screens
import HomeScreen from './src/screens/HomeScreen';
import GameScreenLocal from './src/screens/GameScreenLocal';
import GameScreenAI from './src/screens/GameScreenAI';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="GameLocal"
          component={GameScreenLocal}
          options={{ title: 'Partie locale à 2' }}
        />

        <Stack.Screen
          name="GameAI"
          component={GameScreenAI}
          options={{ title: 'Partie vs IA' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
