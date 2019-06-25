import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import {
  Container,
  Header,
  Thumbnail,
  Content,
  shareImage,
  Button
} from "native-base";
import { Entypo, Feather, Foundation } from "@expo/vector-icons";
import { addPost } from "../../actions/postActions";
import CameraRollSelect from "./CameraRollSelect";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      imageBrowserOpen: false,
      photos: []
    };
  }
  _imageBrowserOpen = () => {
    this.props.navigation.navigate("MediaUpload");
    this.setState({
      imageBrowserOpen: true
    });
  };
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

  updateInputState = (key, value) => {
    this.setState(prevState => {
      return {
        ...prevState,
        [key]: value
      };
    });
  };

  onPostSubmitHandler = () => {
    this.props.addPost({ postText: this.state.text });
  };
  doSomething(images) {
    console.log(images);
  }
  render() {
    return (
      <View>
        {/* <CameraRollSelect
          imageBrowserCallback={this.imageBrowserCallback}
          imageBrowserOpen={this.state.imageBrowserOpen}
          photos={this.state.photos}
        /> */}
        <Container
          style={{
            flexDirection: "column",
            height: 140,
            borderBottomColor: "#ddd",
            borderBottomWidth: 12,
            borderTopColor: "#ddd",
            borderTopWidth: 0.5
          }}
        >
          <View
            style={{
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
              onChangeText={status => this.setState({ status })}
              value={this.state.status}
              underlineColorAndroid={"transparent"}
              onChangeText={val => this.updateInputState("status", val)}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity
              //onPress={this._imageBrowserOpen}
              style={styles.btnFlat}
            >
              <Entypo name="images" size={16} color="#10bc52" />
              <Text style={{ color: "#673AB7", marginLeft: 10, fontSize: 11 }}>
                PHOTOS
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this._onPressButton}
              style={styles.btnFlat}
            >
              <Feather name="video" size={16} color="#673AB7" />
              <Text style={{ color: "#673AB7", marginLeft: 10, fontSize: 11 }}>
                VIDEOS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._onPressButton}
              style={[styles.btnFlat, { borderRightWidth: 0 }]}
            >
              <Foundation name="comments" size={18} color="#f99100" />
              <Text style={{ color: "#673AB7", marginLeft: 10, fontSize: 11 }}>
                SHARES
              </Text>
            </TouchableOpacity>
          </View>
        </Container>
      </View>
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
  shareBtn: {},

  btnFlat: {
    backgroundColor: "white",
    color: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 4,
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
