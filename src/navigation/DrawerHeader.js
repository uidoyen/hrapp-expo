import React, { Component } from 'react'
import {
  Thumbnail,
  Body,
  Button
} from "native-base";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import profile from '../../assets/placeholder.png';
import { getUserProfile } from '../actions/profileAction';

class DrawerHeader extends Component {

  componentDidMount = () => {
    this.props.getUserProfile()
  }

  openProfile = () => {
    console.log(this.props)
    this.props.navigation.navigate('Profile')
  }

  render() {
    const { userProfile } = this.props;
    console.log(userProfile.length)
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => { this.openProfile() }}>
          {userProfile.length === undefined || userProfile.length !== 0 ?
            <View style={styles.drawerHeader}>
              <View>
                {userProfile.avatar &&
                  <Thumbnail
                    source={{ uri: userProfile.avatar }}
                  />
                }
                {!userProfile.avatar &&
                  <Thumbnail
                    source={profile}
                  />
                }
              </View>
              <View style={{ paddingLeft: 20 }}>
                <Body style={{ alignItems: "flex-start" }}>
                  <Text bold style={{ color: "white", fontWeight: "bold" }}>
                    {userProfile.user.name}
                  </Text>
                  <Text note style={{ color: "white" }}>
                    {userProfile.user.role}
                  </Text>
                  <Text note style={{ color: "white" }}>
                    {userProfile.user.email}
                  </Text>
                </Body>
              </View>
            </View>
            : <View></View>
          }
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  userProfile: state.profile.userProfile
})

export default connect(mapStateToProps, { getUserProfile })(DrawerHeader)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#673AB7"
  },
  content: {
    color: "white",
    textAlign: "left"
  },
  drawerHeader: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: "#673AB7"
  },

  drawerImage: {
    height: 60,
    width: 60
  }
});