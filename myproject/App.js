import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// in react native when we pass a function to onchange text, it takes in the value inside the text

export default function App() {
  const [name, setName] = useState('chun-li');
  const [age, setAge] = useState(30);

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput 
        multiline
        style={styles.input} 
        placeholder='e.g John Doe' 
        onChangeText={(val) => setName(val)}
      />
     <Text>name: {name}</Text>
     <TextInput 
        keyboardType='numeric'
        style={styles.input} 
        placeholder='e.g 50' 
        onChangeText={(val) => setAge(val)}
      />
      <Text>age: {age}</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
