import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, ScrollView, View } from 'react-native';


export default function App() {
  const [ name, setName ] = useState('shaun');
  const [ person, setPerson ] = useState({name: 'mario', age: 40});

  const clickHandler = () => {
    setName('chun-li')
    setPerson({name: 'luigi', age: 45 })
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name}</Text>
      <View style = {styles.buttonContainer}>
        <Button title='update state' nnpress = {clickHandler}/>
      </View>
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
  boldText: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 20
  }
});
