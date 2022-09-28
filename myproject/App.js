import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, ScrollView, View } from 'react-native';


export default function App() {
  const [ people, setPeople ] = useState([
    {name: 'mike', key: 1},
    {name: 'kevin', key:2 },
    {name: 'mario', key:3 },
    {name: 'luigi', key:4 },
    {name: 'peach', key:6 },
    {name: 'toad', key:7 },
    {name: 'boiler', key:8 },
    {name: 'mat', key:9 },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    margin: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});
