import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles'
var x = 0
export default function App() {
  return (
    <View style={styles.container}>
      <Text>{x}</Text>
      <Button 
        onPress={() => {
          x++
        }}
        title="Increase"
      />
      <StatusBar style="auto" />
    </View>
  );
}


