import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen({ navigation }: any) {
  return (
    <LinearGradient colors={['#1A2980', '#26D0CE']} style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.logo}>FlashQuiz 🎓</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Flashcards')} style={styles.buttonWrapper}>
        <LinearGradient colors={['#4f7cac', '#003f5c']} style={styles.button}>
          <Text style={styles.buttonText}>Start Flashcards</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Quiz')} style={styles.buttonWrapper}>
        <LinearGradient colors={['#4f7cac', '#003f5c']} style={styles.button}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
  },
  buttonWrapper: {
    width: '80%',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
