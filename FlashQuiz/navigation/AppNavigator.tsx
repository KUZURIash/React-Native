import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen';
import FlashcardScreen from '../screens/FlashcardScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Flashcards" component={FlashcardScreen} options={{ headerShown:false }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown:false }}/>
        <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown:false }} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
