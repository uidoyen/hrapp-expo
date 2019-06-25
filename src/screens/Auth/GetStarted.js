import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native'
import { Button } from "native-base";
import { LinearGradient } from "expo";
class GetStarted extends Component {
  static navigationOptions = {
    header: null
  }

  onPress = () => {
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <LinearGradient
          colors={['#4568DC', '#B06AB3']}
          style={styles.container}
        >

          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
            <Image source={require('../../../assets/Logo.png')} resizeMode="contain" />
            <Text style={{ fontFamily: 'Montserrat', color: "#fff", marginTop: 5, fontSize: 17 }}>Invite earn and explore</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Button
              onPress={this.onPress}
              style={{
                marginTop: 20,
                marginBottom: 20,
                height: 60,
                paddingHorizontal: 50,
                borderRadius: 50,
                backgroundColor: '#FFF'
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontWeight: "bold",
                  textTransform: 'uppercase',
                  fontSize: 18
                }}
              >
                GET STARTED
            </Text>
            </Button>
          </View>
        </LinearGradient>
      </SafeAreaView>
    )
  }
}


export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  loginButtonSection: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})