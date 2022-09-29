import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, FlatList, View } from 'react-native';


export default function App() {
  const [ people, setPeople ] = useState([
    {name: 'mike', id: 1},
    {name: 'kevin', id:2 },
    {name: 'mario', id:3 },
    {name: 'luigi', id:4 },
    {name: 'peach', id:6 },
    {name: 'toad', id:7 },
    {name: 'boiler', id:8 },
    {name: 'mat', id:9 },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
      {/* <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
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
