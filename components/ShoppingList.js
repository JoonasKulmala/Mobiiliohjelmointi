import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList } from 'react-native';

export default function App() {

    const [text, setText] = useState();
    const [data, setData] = useState([]);

    const buttonAddText = () => {
        setData([...data, { key: String(data.length), text: text }]);
        setText('');
    }

    const buttonClearData = () => {
        setData([]);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInputBox}
                onChangeText={text => setText(text)}
                value={text}
            />

            <View style={styles.button}>
                <Button onPress={buttonAddText} title="Add"></Button>
                <Button onPress={buttonClearData} title="Clear"></Button>
            </View>


            <Text style={styles.title}>Shopping list</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Text>{item.text}</Text>}
            />


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
        borderWidth: 1,
        marginTop: 40,
        margin: 10,
        width: 200,
        height: 30,
    },

    title: {
        margin: 5,
        fontSize: 25,
        color: 'black',
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});