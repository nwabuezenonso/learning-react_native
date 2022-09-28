import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [ name, setName ] = useState('shaun');
  const [ age, setAge ] = useState(40);

  const clickHandler = () => {
    setName('chun-li')
    setPerson({name: 'luigi', age: 45 })
  }

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
       style={styles.input}
       placeholder = 'e.g. John Doe'
       onChangeText={(val) => setName()}
      />
      <Text>Enter Age:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g 99'
        onChangeText={(val) => setAge()}
      />
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
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  }
});
