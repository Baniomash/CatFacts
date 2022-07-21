import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import axios from 'axios';

async function funcao(){
    axios.get('https://catfact.ninja/fact').then((response) => {response.data.facts});
}

export default function GatoFatos() {

    
    const [fatoGato, setFatoGato] = useState("");

    return (
    <View style={styles.container}>
      <Text>Pet the cat for cat facts!</Text>
      <TouchableHighlight onPress={setFatoGato(funcao())}>
        <View style={styles.button}>
          <Image source={require('./fotoGato.png')}/>
        </View>
        <Text>{fatoGato}</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
  });
  