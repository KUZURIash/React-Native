import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResultScreen({ route, navigation }: any) {
  const { score, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Quiz Completed!</Text>
      <Text style={styles.score}>Your Score: {score} / {total}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f6f8' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2b4f81', marginBottom: 20 },
  score: { fontSize: 22, marginBottom: 30, color: '#333' },
  button: {
    backgroundColor: '#4f7cac',
    padding: 15,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 18 },
});
