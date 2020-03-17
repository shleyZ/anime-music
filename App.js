/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text, Linking, TouchableOpacity } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={(e)=> {
          Linking.openURL('http://www.devio.org/');
        }}
      >
        <View>
          <Text style={styles.item}>
            Home Page
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f2f2',
    marginTop: 30,
  },
  item: {
    fontSize: 20,
  },
  line: {
    flex: 1,
    height: 0.3,
    backgroundColor: 'darkgray',
  },
});

// export default App;
