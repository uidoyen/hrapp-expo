import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, TouchableOpacity, View, Text, Image, ScrollView, Linking } from 'react-native';
import CustomHeader from "../../UI/CustomHeader";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default class UserfulApp extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: "Useful Apps"
  })
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <CustomHeader navigation={this.props.navigation} title="Useful Apps" icon="ios-notifications" />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', padding: 20, alignItems: 'center', justifyContent: 'space-between', borderBottomColor: '#ddd', borderBottomWidth: 1 }}>

            <View style={{ justifyContent: 'center', flexDirection: 'column' }}>
              <Image
                source={require('../../../assets/ezgif-5-1dac9e4074fb.png')}
                style={{ width: 70, height: 80, resizeMode: 'contain' }}
              />
              <Text>Infy Me</Text>
            </View>

            <View style={{ justifyContent: "space-between", flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => { Linking.openURL('https://play.google.com/store/apps/details?id=com.infosys.it.infosysitapp&hl=en_IN') }}><Image source={require('../../../assets/en_generic_rgb_wo_45.png')} style={{ width: 120, height: 80, resizeMode: 'contain' }} /></TouchableOpacity>
              <TouchableOpacity onPress={() => { Linking.openURL('https://google.com') }}><Image source={require('../../../assets/ios_app_store.png')} style={{ width: 105, height: 80, resizeMode: 'contain' }} /></TouchableOpacity>
            </View>

          </View>

        </View>
      </SafeAreaView>
    )
  }
}
