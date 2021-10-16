import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

    const [text, setText] = useState('');

    const buttonPressed = () => {
        Alert.alert('You typed:' + text);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setText(text)}
                value={text}
            ></TextInput>

            <Button onPress={buttonPressed} title="Press me"></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8C92AC',
        alignItems: 'center',
        justifyContent: 'center',
    },
});