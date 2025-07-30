import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import { flashcards } from '../data/questions';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export default function FlashcardScreen() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const progress = ((index + 1) / flashcards.length) * 100;

  const currentCard = flashcards[index];

  const nextCard = () => {
    setShowAnswer(false);
    setIndex((index + 1) % flashcards.length);
  };

  return (
    <LinearGradient colors={['#1A2980', '#26D0CE']} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>📚 Flashcards</Text>

        {/* Progress bar */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>

        {/* Card */}
        <TouchableOpacity onPress={() => setShowAnswer(!showAnswer)} style={styles.card}>
          <Text style={styles.cardText}>
            {showAnswer ? currentCard.answer : currentCard.question}
          </Text>
        </TouchableOpacity>

        {/* Next button */}
        <TouchableOpacity onPress={nextCard} style={styles.button}>
          <Text style={styles.buttonText}>Next ➡️</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progressContainer: {
    height: 10,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    marginBottom: 30,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#fff',
    paddingVertical: 60,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 40,
    width: width * 0.85,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 22,
    color: '#333',
    textAlign: 'center',
    lineHeight: 30,
  },
  button: {
    backgroundColor: '#00E5FF',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
