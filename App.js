import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Button } from 'react-native';

export default class App extends React.Component{
  componentDidMount() {

  }

  onButtonPress = () => {
    
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Welcome to the React Native PVT Test!</Text>
        <Text>Wait for the red dot to disappear</Text>
        <Text>and tap the screen as fast as you can</Text>
        <Text></Text>
        <Text>When you're ready, tap Start</Text>
        <Text></Text>
        <Button
          onPress={this.onButtonPress}
          title="Start"
          color="#1aad5b"
          accessibilityLabel="Start"
        />

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
