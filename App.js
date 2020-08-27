import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Button, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Svg, { Circle } from "react-native-svg";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const NUM_OF_TRIALS = 5;

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
        pvtMode : 0,
        showTimer : false,
        timerValue : 0,
        timerTapped : false,
    }
  }

  componentDidMount() {

  }

  showCircle() {
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

  activateTimer() {
    let start = Date.now();

    const timer = setInterval(() => {
      // time out after 5s
      if (this.state.timerValue > 5000) {
        clearInterval(timer);
      }
      else {
        this.setState({
          timerValue : Date.now() - start
        });
      }
    }, 1);

    return (

      <View style={styles.container}>
        <Text style={styles.timerText}>{this.state.timerValue}</Text>
        <Button
          onPress={async () => {
            clearInterval(timer);
            // hold the value there for 1s
            await sleep(1000);
          }}
          title="TAP NOW"
          color="#1aad5b"
          accessibilityLabel="TAP"
        />
      </View>

      // <TouchableOpacity
      //   onPress={() => {
      //     console.log('timer pressed!')
      //   }}
      //   style={styles.fsTap}>
      //   <View>
      //   <Text style={{color: 'black'}}>{this.state.timerValue}</Text>
      //   </View>
      // </TouchableOpacity>

    );
  }

  runOneRound() {
    return this.showCircle();
  }

  startView() {
    if (this.state.pvtMode == 2) {
      return (
        <View style={{alignItems: 'center'}}>
          <Text>Thank you!</Text>
          <Text>You have completed the PVT test.</Text>
          <Text>Tap below to return to the home screen</Text>
          <Text></Text>
          <Button
            onPress={this.onHomeButtonPress}
            title="Home"
            color="#1aad5b"
            accessibilityLabel="Home"
          />
        </View>
      );
    }

    if (this.state.pvtMode == 1) {
      setTimeout(() => {
        // time till circle disappears is random into between 1000 and 4000
        timeTillCircleGone = 1000 + Math.floor(Math.random() * 3000);

        setTimeout(() => {
          this.setState({showTimer : true});
          setTimeout(() => {
            this.setState({showTimer : false});
          }, 8000);  // always wait 8 seconds before shutting off timer
        }, timeTillCircleGone);
      }, 1000);

      if (this.state.showTimer) {
        return (
          <View>
            {this.activateTimer()}
          </View>
        );
      }

      if (!this.state.showTimer) {
        return (
          <View>
            {this.showCircle()}
          </View>
        );
      }

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
            onPress={this.onStartButtonPress}
            title="Start"
            color="#1aad5b"
            accessibilityLabel="Start"
          />
        </View>
      );
    }
  }

  onStartButtonPress = () => {
    this.setState({pvtMode : 1});
  }

  onHomeButtonPress = () => {
    this.setState({pvtMode : 0});
  }

  onTimerTap = () => {
    this.setState({timerTapped: true});
    console.log('timer tapped');
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
  fsTap: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'red'
  },
  timerText: {
    color: 'black',
    fontSize: 24,
  }
});
