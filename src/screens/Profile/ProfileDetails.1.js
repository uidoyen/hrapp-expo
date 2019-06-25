import React, { Component } from 'react'
import { Header, Body, Title, Content, Left, Icon, Right, Center } from 'native-base'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Thumbnail } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';

import { connect } from 'react-redux'
import QRCode from 'react-native-qrcode';

type Route = {
  key: string;
  icon: string;
};


const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = (props) => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

class ProfileDetails extends Component {
  static title = 'Top tab bar with icons';
  static backgroundColor = '#e91e63';
  static appbarElevation = 0;

  state = {
    modalVisible: false,
    index: 0,
    key: "",
    icon: "",
    routes: [
      { key: 'profile', icon: 'md-chatbubbles' },
      { key: 'qrcode', icon: 'md-contact' }
    ],
  }

  handleIndexChange = (index) => {
    this.setState({
      index,
    });
  }

  renderIcon = ({ route, color }: { route: Route; color: string }) => (
    <Ionicons name={route.icon} size={24} color={color} />
  );

  componentDidMount() {
    // this.props.getGievs();
    // this.props.logoutUser()
  }
  render() {
    const { userProfile } = this.props.profile;
    console.log(userProfile)
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </SafeAreaView >
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(ProfileDetails)

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: "#fff",
    flex: 1
  },
  container: {
    paddingTop: 10,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gievs: {
    marginBottom: 12
  },
  button: {
    paddingHorizontal: 15,
    backgroundColor: 'orange'
  },
  childName: {
    color: 'white',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  childLocation: {
    color: 'white',
    fontSize: 12
  }
})