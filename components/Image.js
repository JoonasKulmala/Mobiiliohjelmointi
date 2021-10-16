import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Image, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

    const [text, setText] = useState('');

    const buttonPressed = () => {
        Alert.alert('You typed:' + text);
    }

    return (
        <View style={styles.container}>
            <Image style={{ width: 250, height: 100 }}
                source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmyy.haaga-helia.fi%2F~woljo%2FLOGO%2FHAAGA_HELIA_suomi.png&f=1&nofb=1' }}
            ></Image>
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