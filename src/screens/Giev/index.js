import React, { Component } from 'react'
import { Header, Body, Title, Content, Left, Icon, Right, Center } from 'native-base'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authAction';
import GievsItem from './GievsItem';
import { Ionicons, AntDesign } from '@expo/vector-icons';

export class Gievs extends Component {
  state = {
    modalVisible: false,
  }
  componentDidMount() {
    // this.props.getGievs();
    // this.props.logoutUser()
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  render() {
    console.log(this.props)
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View>
          <View style={{ backgroundColor: '#673AB7', height: 50, flexDirection: 'row', paddingHorizontal: 10 }}>
            <Left style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                <AntDesign name="bars" size={32} color="white" />
              </TouchableOpacity>
            </Left>
            <Body style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
              <Title style={{ color: 'white' }}>GIEV</Title>
            </Body>
            <Right style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                <Ionicons name="ios-cart" size={32} color="white" style={styles.menuIcon} />
              </TouchableOpacity>
            </Right>
          </View>
        </View>
        <ScrollView style={styles.container}>
          <GievsItem {...this.props} modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { logoutUser })(Gievs)
const styles = StyleSheet.create({
  gievs: {
    marginBottom: 12
  },
  button: {
    paddingHorizontal: 15,
    backgroundColor: 'orange'
  },
  container: {
    backgroundColor: "#ddd"
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