/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Navigator from './navigator';

const arr = Array.apply(null, {length: 1000}).map(Number.call, Number);

class Main extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TouchableOpacity style={{ marginTop: 30 }} onPress={() => this.props.navigator.push({ screen: 'Main' })}>
          <Text>Push other</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 30 }} onPress={() => this.props.navigator.pop()}>
          <Text>Back</Text>
        </TouchableOpacity>
        {arr.map(n => <View key={n}><Text>{n}</Text></View>)}
      </View>
    );
  }

}


const screensConfig = { Main };
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator initialState={[[{ screen: 'Main' }]]} screensConfig={screensConfig} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
