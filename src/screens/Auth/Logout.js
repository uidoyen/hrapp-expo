import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Image, TouchableOpacity, AsyncStorage,ActivityIndicator } from "react-native";
import { Content, Form, Button, H2, Icon } from "native-base";
import { TextInput } from "react-native-gesture-handler";
import AuthLoading from '../Auth/AuthLoading'

export class Logout extends Component {

   componentWillMount(){
       console.log('in logout')
    AsyncStorage.clear();
    this.props.navigation.navigate('Auth')
   }

   
   render(){
    return(
        <View>
            <ActivityIndicator/>
            
        </View>
    )
}
 
}

export default Logout;