import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text, Image, TouchableOpacity, AsyncStorage } from "react-native";
import { Button, H2, Icon, Content, Form, Item, Input, Label } from "native-base";
class Login extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    email: '',
    password: ''
  };

  updateInputState = (key, value) => {
    this.setState(prevState => {
      return {
        ...prevState,
        [key]: value
      }
    })
  }

  handleFormSubmit = () => {
    this.props.loginUser({ email: "rsr.mukkara45@gmail.com", password: "Ranga@45" });
  };
  
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#673AB7",
          justifyContent: "center",
          padding: 20
        }}
      >
        <View style={styles.container}>
          <Image
            //style={{ width: 200, height: 50, marginBottom: 30 }}
            source={require('../../../assets/edgeverve-logo.png')}
          />
          <Item floatingLabel>
            <Label style={{ color: 'white' }}>Email</Label>
            <Input
              name={"email"}
              type="text"
              onChangeText={(val) => this.updateInputState('email', val)}
            />
          </Item>
          <Item floatingLabel>
            <Label style={{ color: 'white' }}>Password</Label>
            <Input
              name={"password"}
              type="text"
              onChangeText={(val) => this.updateInputState('password', val)}
            />
          </Item>
          <Button
            block
            style={{
              marginVertical: 20,
              backgroundColor: 'white'
            }}
            onPress={this.handleFormSubmit}
          >
            <Text
              style={{
                color: "#673AB7",
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 18
              }}
            >
              SIGN IN
          </Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})