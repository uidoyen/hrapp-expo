import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Left, Right, Body, Title, Container, Thumbnail } from 'native-base';
import { Ionicons, AntDesign, Entypo, Feather, Foundation } from "@expo/vector-icons";
import { addPost } from "../../actions/postActions";
import ImageBrowser from "./ImageBrowser";

class AddPost extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    headerStyle: {
      backgroundColor: '#673AB7',
      height: 40
    },
    headerTintColor: '#fff',
  })
  constructor(props) {
    super(props);
    this.state = {
      postText: "",
      imageBrowserOpen: false,
      photos: []
    };
  }
  imageBrowserCallback = callback => {
    callback
      .then(photos => {
        console.log(photos);
        this.setState({
          imageBrowserOpen: false,
          photos
        });
      })
      .catch(e => console.log(e));
  };

  sharePost = () => {
    const formData = new FormData();
    for (const file of this.state.photos) {
      formData.append('image', file)
    }

    formData.append('postText', this.state.postText)
    this.props.addPost(formData);
    this.goBack();
  }
  goBack() {
    const { navigation } = this.props;
    navigation.goBack();
    navigation.state.params.onSelect({ selected: true });
  }

  componentDidUpdate = () => {
    // console.log('post added')
  }

  renderImage(item, i) {
    return (
      <Image
        style={{ height: 200, width: null }}
        source={{ uri: item.file }}
        key={i}
      />
    );
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView style={styles.container}>
          <View>
            <View style={{ backgroundColor: '#673AB7', height: 50, flexDirection: 'row', paddingHorizontal: 10 }}>
              <Left style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Text style={styles.shareBtn}>Back</Text>
                </TouchableOpacity>
              </Left>
              <Body style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                <Title style={{ color: 'white' }}>Create post</Title>
              </Body>
              <Right style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => this.sharePost()}>
                  <Text style={styles.shareBtn}>Share</Text>
                </TouchableOpacity>
              </Right>
            </View>
          </View>

          <Container
            style={{
              flexDirection: "column"
            }}
          >
            <View
              style={{
                borderBottomColor: "#ddd",
                borderBottomWidth: 0.5,
                flexDirection: "row"
              }}
            >
              <View style={styles.shareImage}>
                <Thumbnail source={require("../../../assets/76161.jpg")} />
              </View>
              <TextInput
                style={styles.textInput}
                multiline={true}
                numberOfLines={4}
                placeholder="What do you want to share?"
                onChangeText={postText => this.setState({ postText })}
                value={this.state.postText}
                underlineColorAndroid={"transparent"}
              // onChangeText={val => this.updateInputState("status", val)}
              />
            </View>
            <View
              style={{ flexDirection: "column", paddingVertical: 10 }}
            >
              <View style={{
                borderBottomColor: "#ddd",
                borderBottomWidth: 0.5,
                flexDirection: "row",
                paddingVertical: 5,
                paddingLeft: 10
              }}>
                <TouchableOpacity
                  onPress={() => this.setState({ imageBrowserOpen: true })}
                  style={styles.btnFlat}
                >
                  <Entypo name="images" size={20} color="#10bc52" />
                  <Text style={{ color: "#673AB7", marginLeft: 10, fontSize: 11 }}>
                    PHOTOS/VIDEOS
              </Text>
                </TouchableOpacity>
              </View>
              <View style={{
                borderBottomColor: "#ddd",
                borderBottomWidth: 0.5,
                flexDirection: "row",
                paddingVertical: 5,
                paddingLeft: 10
              }}>
                <TouchableOpacity
                  onPress={this._onPressButton}
                  style={styles.btnFlat}
                >
                  <Ionicons name="ios-camera" size={28} color="#f99100" />
                  <Text style={{ color: "#673AB7", marginLeft: 10, fontSize: 11 }}>
                    CAMERA
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {this.state.imageBrowserOpen && <ImageBrowser max={4} callback={this.imageBrowserCallback} />}
            {this.state.photos.map((item, i) => this.renderImage(item, i))}
          </Container>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { addPost }
)(AddPost);

const styles = StyleSheet.create({
  avatar: {
    marginTop: "12%",
    marginLeft: "15%",
    width: 60,
    height: 60
  },
  shareImage: {
    padding: "3%"
  },
  textInput: {
    marginTop: "2%"
  },
  grayBg: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderWidth: 0.5
  },
  shareBtn: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },

  btnFlat: {
    backgroundColor: "white",
    color: "white",
    flex: 1,
    alignItems: 'center',
    flexDirection: "row",
    paddingVertical: 6,
    borderRadius: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderTopColor: "gray",
    borderRightColor: "gray",
    borderBottomColor: "gray",
    shadowOpacity: 0
  }
});
