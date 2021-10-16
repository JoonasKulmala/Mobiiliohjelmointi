import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Button onPress={buttonPressed} title="Press me"></Button>
        </View>
    );
}

const buttonPressed = () => {
    Alert.alert('Button pressed');
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8C92AC',
        alignItems: 'center',
        justifyContent: 'center',
    },
});