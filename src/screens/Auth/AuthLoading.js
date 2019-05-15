import React, { Component } from 'react';
import { View, Text, Button, TextInput, AsyncStorage, alert, ActivityIndicator} from 'react-native';
import {StackNavigator } from 'react-navigation'
import axios from 'axios'
import { API_GATEWAY } from "../../utils/config";


class AuthLoading extends Component {

  constructor(){
    super();
    this.loadApp();
  }      
    
    loadApp = async() => {
      AsyncStorage.clear()
      const userToken = await AsyncStorage.getItem('jwtToken');
      this.props.navigation.navigate(userToken?'AppDrawer':'Auth');
    }

    render(){
        return(
            <View>
                <ActivityIndicator/>
            </View>
        )
    }
}

export default AuthLoading;
