import React, { Component } from 'react'
import {
  Thumbnail,
  Header,
  Body,
  Left,
  Right,
} from "native-base";
import { View, Text, StyleSheet } from 'react-native';
import profile from '../../assets/hays-profile.jpg';

class DrawerHeader extends Component {
  render() {
    return (
      <Header style={styles.drawerHeader}>
        <Left style={styles.drawerImageContainer}>
          <Thumbnail
            large
            source={ profile }
            style={styles.drawerImage}
          />
        </Left>
        <Right>
          <Body style={{ alignItems: "flex-start" }}>
            <Text bold style={{ color: "white", fontWeight: "bold" }}>
              Hussain
            </Text>
            <Text note style={{ color: "white" }}>
              description goes here
            </Text>
            <Text note style={{ color: "white" }}>
              Bangalore
            </Text>
          </Body>
        </Right>
      </Header>
    )
  }
}

export default DrawerHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#673AB7"
  },
  content: {
    color: "white",
    textAlign: "left"
  },
  drawerHeader: {
    backgroundColor: "#673AB7",
    height: 100
  },
  drawerImageContainer: {
    width: 100
  },
  drawerImage: {
    height: 60,
    width: 60
  }
});