import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

export default function App() {

  const add = () => {
    setResult(Number(number1) + Number(number2));
    setNumber1('')
    setNumber2('')
  }

  const subtract = () => {
    setResult(Number(number1) - Number(number2));
    setNumber1('')
    setNumber2('')
  }

  const [result, setResult] = useState('');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  return (
    <View style={styles.container}>

      <Text>Result: {result}</Text>

      <TextInput
        style={styles.textInputBox}
        keyboardType='number-pad'
        onChangeText={text => setNumber1(text)}
        value={number1}
      />

      <TextInput
        style={styles.textInputBox}
        keyboardType='number-pad'
        onChangeText={text => setNumber2(text)}
        value={number2}
      />
      <View style={styles.operators}>
        <Button onPress={add} title="+"></Button>
        <Button onPress={subtract} title="-"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInputBox: {
    backgroundColor: '#FFF',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,

  },

  operators: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});