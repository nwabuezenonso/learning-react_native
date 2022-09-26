import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, ScrollView, View } from 'react-native';

// in react native when we pass a function to onchange text, it takes in the value inside the text

export default function App() {
  const [people, setPeople] = useState([
    {name: 'shaun', key: '1' },
    {name: 'yoshi', key: '2'},
    {name: 'peach', key: '3'},
    {name: 'mario', key: '4'},
    {name: 'luigi', key: '5'},
    {name: 'toad', key: '6'},
    {name: 'bowser', key: '7'},
  ]);

  return (
    // A map function cycle through the array and returns each function in the array
    <View style={styles.container}>
      <Text>we are working on a react native project</Text>
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
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
