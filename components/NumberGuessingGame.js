import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, Alert } from 'react-native';

export default function App() {

    let rand;
    useEffect(() => {
        getRandom();
    }, [])
    const getRandom = () => {
        rand = Math.floor(Math.random() * 100) + 1;
        setRandom(rand);
    }

    const [guess, setGuess] = useState('');
    const [random, setRandom] = useState('');
    // Initialize guesses to 0
    const [guesses, setGuesses] = useState('0');

    const buttonPressed = () => {

        setGuesses(Number(guesses) + 1)
        if (guess == random) {
            Alert.alert(`You Guessed the number in ${guesses + 1} guesses`)
            setGuesses(0)
            getRandom()
        }
        setGuess('')
    }

    return (
        <View style={styles.container}>

            {/*<Text>{random}</Text>*/}
            <Text>Guesses: {guesses}</Text>
            <Text>Guess a number between 1-100</Text>

            <TextInput
                style={styles.textInputBox}
                keyboardType='number-pad'
                onChangeText={text => setGuess(text)}
                value={guess}
            />

            <View style={styles.operators}>
                <Button onPress={buttonPressed} title="Make guess"></Button>
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

    },
    operators: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});