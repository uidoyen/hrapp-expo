import React, { Component } from 'react';
import { Alert, Linking, Dimensions, LayoutAnimation, Image, Text, View, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { Left, Right, Body, Title, Button } from 'native-base';
import { Ionicons, AntDesign, EvilIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')
const qrSize = width * 0.9

class Hidden extends React.Component {
  render() {
    return null;
  }
}

export default class ScanQRCode extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    drawerLabel: <Hidden />
  })
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
    firstQuery: '',
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    alert(result.data)
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data });
    }
  };

  render() {
    const { firstQuery } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }}>
        <View>
          <View style={{ backgroundColor: '#673AB7', height: 50, flexDirection: 'row', paddingHorizontal: 10 }}>
            <Left style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                <AntDesign name="bars" size={32} color="white" />
              </TouchableOpacity>
            </Left>
            <Body style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
              <Title style={{ color: 'white' }}>Scan Employee</Title>
            </Body>
            <Right style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Ionicons name="ios-arrow-back" size={32} color="white" style={styles.menuIcon} />
              </TouchableOpacity>
            </Right>
          </View>
        </View>
        <View>
          {this.state.hasCameraPermission === null
            ? <Text>Requesting for camera permission</Text>
            : this.state.hasCameraPermission === false
              ? <Text style={{ color: '#fff' }}>
                Camera permission is not granted
                </Text>
              : <BarCodeScanner
                onBarCodeRead={this._handleBarCodeRead}
                // style={[StyleSheet.absoluteFill, styles.scancontainer]}
                style={styles.scancontainer}
              >
                <Image
                  style={styles.qr}
                  source={require('../../../assets/big-square-target.png')}
                />

                {/* <Ionicons name="ios-qr-scanner" size={350} color="white" style={styles.qr} /> */}
                <Text
                  onPress={() => this.props.navigation.pop()}
                  style={styles.cancel}>
                  Cancel
                </Text>
              </BarCodeScanner>}
        </View>

      </SafeAreaView>
    );
  }

  _handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => Linking.openURL(this.state.lastScannedUrl),
        },
        { text: 'No', onPress: () => { } },
      ],
      { cancellable: false }
    );
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {this.state.lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}>
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
  },
  url: {
    flex: 1,
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
  scancontainer: {
    width,
    height,
    alignItems: 'center',
    backgroundColor: 'red'
  },
  qr: {
    marginTop: '30%',
    width: qrSize,
    height: qrSize,
  },
  description: {
    fontSize: width * 0.09,
    marginTop: '10%',
    textAlign: 'center',
    width: '70%',
    color: 'white',
  },
  cancel: {
    fontSize: width * 0.05,
    textAlign: 'center',
    width: '70%',
    color: 'white',
  }
});
