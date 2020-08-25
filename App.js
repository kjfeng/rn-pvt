import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Button, Dimensions } from 'react-native';
import Svg, { Circle } from "react-native-svg";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const NUM_OF_TRIALS = 5;
var times = [];

export default class App extends React.Component {


  constructor() {
    super()
    this.state = {
        pvtMode : 0
    }
  }

  componentDidMount() {

  }

  startView() {
    if (this.state.pvtMode == 1) {
      return (
        <View>
          <Svg width={screenWidth} height={screenHeight}>
            <Circle
            fill="red"
            cx="50%"
            cy="50%"
            r={30}
            />
          </Svg>

        </View>

      );
    }
    else {
      return (
        <View style={{alignItems: 'center'}}>
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
        </View>
      );
    }
  }

  onButtonPress = () => {
    this.setState({pvtMode : 1});
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.startView()}
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
