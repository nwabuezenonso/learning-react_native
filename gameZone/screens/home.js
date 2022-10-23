import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home(onLayout) {
  return (
    <View style={styles.container} onLayout={onLayout}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  title: {
    fontFamily: 'nunito-bold',
    fontSize: 30
  }
});

