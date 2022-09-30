// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, FlatList, View } from 'react-native';


export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'}
  ]);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>
        <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={( todos ) => (
                <Text>{todos.text}</Text>
              )}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
