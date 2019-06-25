import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, TouchableOpacity, View, Text, Image, ScrollView, WebView } from 'react-native';
import CustomHeader from "../../UI/CustomHeader";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default class Brandstore extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: "Brandstore"
  })
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <CustomHeader navigation={this.props.navigation} title="Useful Apps" icon="ios-notifications" />
        <View style={{ flex: 1 }}>
          <WebView
            source={{ uri: 'https://edgeverve.offineeds.com/' }}
            style={{ marginTop: 20 }}
          />

        </View>
      </SafeAreaView>
    )
  }
}
