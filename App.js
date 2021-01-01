import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button 
        onPress={() => {
          alert('Hello World')
        }}
        title="Press Here"
      />
      <StatusBar style="auto" />
    </View>
  );
}


