import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, ScrollView, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>we are very original</Text>
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
  }
});
