// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, FlatList, View, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
    {text: 'play a game', key: '4'}
  ]);

  const presshandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      // takes in a function because we are relying on the previous todos
      setTodos((prevTodos) => {
        return [
          { text : text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    }else{
      Alert.alert('OOPD!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }

  }

  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss();
      console.log('dismissed Keyboard')
    }}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler = {submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={( {item} ) => (
                <TodoItem item={item} pressHandler = {presshandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  },

});
