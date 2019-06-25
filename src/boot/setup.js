import * as Expo from "expo";
import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
import { Provider } from "react-redux";
import App from "../App";
import { store } from './configureStore';
import { PersistGate } from 'redux-persist/integration/react';

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isReady: false
    };
  }
  renderLoading = () => (
    <View style={styles.container}>
      <Expo.AppLoading />
    </View>
  );
  componentWillMount() {
    this.loadFonts();
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Montserrat: require('../../assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-Bold.ttf'),
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require("@expo/vector-icons/fonts/Ionicons.ttf"),
      'FontAwesome': require("native-base/Fonts/FontAwesome.ttf"),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady || this.state.isLoading) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
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