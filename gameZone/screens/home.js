import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home(onLayout) {
  return (
    <View style={globalStyles.container} onLayout={onLayout}>
      <Text>ReviewDetails</Text>
    </View>
  );
}

