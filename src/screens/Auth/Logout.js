import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, AsyncStorage } from "react-native";

export class Logout extends Component {
   componentWillMount(){
    console.log('in logout')
    AsyncStorage.clear();
    this.props.navigation.navigate('Auth')
   }

   render(){
    return(
        <View>
            <Text>Logout</Text>
        </View>
    )
}
 
}

export default Logout;