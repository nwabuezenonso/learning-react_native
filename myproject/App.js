import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native';


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

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        // keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
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
