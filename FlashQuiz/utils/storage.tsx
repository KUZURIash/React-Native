import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, value: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getData = async (key: string) => {
  const stored = await AsyncStorage.getItem(key);
  return stored ? JSON.parse(stored) : null;
};
