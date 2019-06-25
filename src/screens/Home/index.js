import React, { Component } from "react";
import { connect } from "react-redux";
import CustomHeader from "../../UI/CustomHeader";
import AddPost from "./AddPost";
import PostsContent from "./PostsContent";
import { logoutUser } from '../../actions/authAction';
import { getUserProfile } from '../../actions/profileAction';
import { getPosts } from "../../actions/getPostsActions"
import { deletePostAction } from "../../actions/deletePostAction";
import { Image, View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator, Dimensions, ScrollView, RefreshControl } from "react-native";
import {
  Container, Content, CardItem,
  Thumbnail,
  Button,
  Left,
  Body,
  Right,
  ActionSheet
} from "native-base";
import { Video } from 'expo';
import { Entypo, MaterialIcons, Foundation } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
const { width } = Dimensions.get('window');
import moment from 'moment';
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      expanded: false,
      photoIndex: 0,
      isOpen: false,
      mute: false,
      shouldPlay: false,
      refreshing: false
    };
  }

  static navigationOptions = ({ navigation }) => ({
    header: null
  });


  handleBack = () => {
    console.log('sdfsdfdsf')
  };

  onSelect = data => {
    this.setState(data);
    this.props.getPosts()
  };

  handlePostAction = (id, index) => {
    console.log('handlePostAction', id, index)
    if (index === "Delete") {
      this.props.deletePostAction(id);
    }
    if (index === 'Report') {
      console.log('report post')
    }

    // for (var i = 0; i < this.props.posts.length; i++) {
    //   if (this.props.posts[i] === id) {
    //     this.props.posts.splice(i, 1);
    //     i--;
    //   }
    // }
  }

  componentDidMount = () => {
    this.props.getPosts()
  }

  onPress = () => {
    this.props.navigation.navigate("AddPost", { onSelect: this.onSelect });
  };

  handlePlayAndPause = () => {
    this.setState((prevState) => ({
      shouldPlay: !prevState.shouldPlay
    }));
  }

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,
    }));
  }

  hideActionSheet = () => {

  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.props.getPosts()
  }

  componentWillReceiveProps = (nextProps) => {
    // console.log("current one", this.props.posts)
    // console.log("next one", nextProps.posts)
    // console.log(this.props.posts === nextProps.posts)
    if (this.props.posts !== nextProps.posts) {
      this.setState({ refreshing: false });
      console.log('fetched')
    }
  }

  render() {
    let BUTTONS, DESTRUCTIVE_INDEX, CANCEL_INDEX;
    let role = this.props.auth.user.role;
    console.log(role)
    if (role === 'user') {
      BUTTONS = ["Report", "Cancel"];
      DESTRUCTIVE_INDEX = 0;
      CANCEL_INDEX = 1;
    } else {
      BUTTONS = ["Report", "Delete", "Cancel"];
      DESTRUCTIVE_INDEX = 1;
      CANCEL_INDEX = 2;
    }

    const { posts } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <CustomHeader navigation={this.props.navigation} icon="ios-notifications" />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }>
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
                value={this.state.status}
                underlineColorAndroid={"transparent"}
                onChangeText={() => { this.props.navigation.navigate('AddPost') }}
                onPress={() => { this.props.navigation.navigate('AddPost') }}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity
                onPress={this.onPress}
                //onPress={() => { this.props.navigation.navigate('AddPost') }}
                style={styles.btnFlat}
              >
                <Entypo name="images" size={16} color="#10bc52" />
                <Text style={{ color: "#673AB7", marginLeft: 10, fontSize: 11 }}>
                  PHOTOS/VIDEOS
              </Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                onPress={this._onPressButton}
                style={styles.btnFlat}
              >
                <Feather name="video" size={16} color="#673AB7" />
                <Text style={{ color: "#673AB7", marginLeft: 10, fontSize: 11 }}>
                  VIDEOS
              </Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => { this.props.navigation.navigate('AddPost') }}
                style={[styles.btnFlat, { borderRightWidth: 0 }]}
              >
                <Foundation name="comments" size={18} color="#f99100" />
                <Text style={{ color: "#673AB7", marginLeft: 10, fontSize: 11 }}>
                  SHARES
              </Text>
              </TouchableOpacity>
            </View>
          </Container>
          <View style={styles.container}>
            {
              posts.length > 0 ? posts.map((arr, index) => (
                <View style={styles.containerInner} key={index}>
                  <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    padding: 10
                  }}>

                    <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                      <Thumbnail source={{ uri: arr.avatar }} />
                      <View style={{ marginLeft: 10 }}>
                        <Text>{arr.name}</Text>
                        <Text style={styles.date}>{moment(arr.date).format('MM-DD-YYYY hh:ss:a')}</Text>
                      </View>
                    </View>

                    <View style={{
                      width: 20
                    }}>
                      <TouchableWithoutFeedback>
                        <TouchableOpacity
                          onPress={() =>
                            ActionSheet.show(
                              {
                                options: BUTTONS,
                                cancelButtonIndex: CANCEL_INDEX,
                                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                //title: "Testing ActionSheet"
                              },
                              buttonIndex => {
                                this.handlePostAction(arr._id, BUTTONS[buttonIndex])
                                //this.setState({ clicked: BUTTONS[buttonIndex] });
                              }
                            )
                          }
                        >
                          <Image
                            source={require("../../../assets/more.png")}
                            style={{ height: 16, width: 16 }}
                          />
                        </TouchableOpacity>
                      </TouchableWithoutFeedback>
                    </View>
                  </View>

                  <CardItem>
                    <Body>
                      {arr.postType === "image/png" &&
                        <Image
                          source={{ uri: arr.media[0] }}
                          style={{ height: 200, width: "100%" }}
                        />
                      }

                      {arr.postType === "image/jpeg" &&
                        <Image
                          source={{ uri: arr.media[0] }}
                          style={{ height: 200, width: "100%" }}
                        />
                      }
                      {arr.postType === "video/mp4" &&
                        <View style={styles.videocontainer}>
                          <View>
                            {/* <Text> React Native Video </Text> */}
                            <Video
                              source={{ uri: arr.media[0] }}
                              shouldPlay={this.state.shouldPlay}
                              isMuted={this.state.mute}
                              resizeMode="cover"
                              style={{ width: width - 30, height: 300 }}
                              name=""
                            />
                            <View style={styles.controlBar}>
                              <MaterialIcons
                                name={this.state.mute ? "volume-mute" : "volume-up"}
                                size={45}
                                color="white"
                                onPress={this.handleVolume}
                              />
                              <MaterialIcons
                                name={this.state.shouldPlay ? "pause" : "play-arrow"}
                                size={45}
                                color="white"
                                onPress={this.handlePlayAndPause}
                              />
                            </View>
                          </View>
                        </View>
                      }
                      {arr.postType === "text" &&
                        <Text>{arr.postText}</Text>
                      }
                      {arr.postType === "t" &&
                        <Text>{arr.postText}</Text>
                      }
                    </Body>
                  </CardItem>

                  <CardItem style={{ paddingTop: 0, paddingBottom: 0 }}>
                    <Left>
                      <Button transparent onPress={() => this.handleLike()}>
                        <Icon size={22} color="#d62111" name="heart-o" />
                        <Text style={styles.text}>{arr.likes.length}</Text>
                      </Button>
                    </Left>
                    <Right>
                      <Button transparent onPress={() => this.commentHandler()}>
                        <Icon size={22} color="#673AB7" name="comment-o" />
                        <Text style={styles.text}>{arr.comments.length}</Text>
                      </Button>
                    </Right>
                  </CardItem>
                </View>
              )
              ) :
                <ActivityIndicator size="small" color="#00ff00" />
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  posts: state.posts.posts
});
export default connect(mapStateToProps, { logoutUser, getUserProfile, getPosts, deletePostAction })(Home);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd"
  },
  containerInner: {
    marginBottom: 12
  },
  postavatar: {
    width: 100,
    height: 100,
    borderRadius: 80
  },
  text: {
    fontSize: 12,
    paddingLeft: 4
  },
  date: {
    fontSize: 12,
    color: "#555759"
  },
  postText: {
    color: "#212529"
  },
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
  },
  videocontainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 10
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
});