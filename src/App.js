import React, { Component } from "react";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { View, StyleSheet } from 'react-native'
export default class App extends Component {
  render() {
    return (
      <View style={styles.root}>
        <DrawerNavigator />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 24
  }
})