import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { quizQuestions } from '../data/questions';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function QuizScreen() {
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    if (answered) return;

    setSelectedOption(option);
    setAnswered(true);
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSelectedOption(null);
      setAnswered(false);
      if (currentQuestionIndex + 1 < quizQuestions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        navigation.navigate('Result', { score, total: quizQuestions.length });
      }
    }, 1000);
  };

  return (
    <LinearGradient colors={['#1A2980', '#26D0CE']} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>

          {currentQuestion.options.map((option, index) => {
            let backgroundColor = '#fff';

            if (answered) {
              if (option === currentQuestion.correctAnswer) {
                backgroundColor = '#d4edda'; // green
              } else if (option === selectedOption) {
                backgroundColor = '#f8d7da'; // red
              }
            }

            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleOptionSelect(option)}
                style={[styles.optionButton, { backgroundColor }]}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
  },
});
