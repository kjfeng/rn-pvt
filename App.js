import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

export default class App extends React.Component{
  componentDidMount() {

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Hello</Text>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
