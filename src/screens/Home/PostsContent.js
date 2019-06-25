import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import {
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  ActionSheet
} from "native-base";
import { withNavigation } from "react-navigation";
import { getPosts } from "../../actions/getPostsActions"


import Icon from "react-native-vector-icons/FontAwesome";

class PostsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      photoIndex: 0,
      isOpen: false
    };
  }
  componentDidMount() {
    this.props.getPosts();
  }
  handleLike = id => {
  };

  handleUnLike = id => {
  };

  userAlreadyLiked = likes => {
  };
  commentHandler = id => {
    //this.props.navigation.navigate("Comments", { _id: id });
  };
  componentWillUnmount() {
    console.log('unmounted')
  }
  render() {
    var BUTTONS = ["Edit", "Delete"];
    var DESTRUCTIVE_INDEX = 3;
    var CANCEL_INDEX = 4;
    const { posts } = this.props;

    return (
      <View style={styles.container}>
        {
          posts.length > 0 ? posts.map((arr, index) => (
            <View style={styles.containerInner} key={index}>
              <CardItem>
                <Left>
                  <Thumbnail source={{ uri: arr.avatar }} />
                  <Body>
                    <Text>{arr.name}</Text>
                    <Text style={styles.date}>{arr.date}</Text>
                  </Body>
                </Left>
                <Right>
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
                          this.setState({ clicked: BUTTONS[buttonIndex] });
                        }
                      )
                    }
                  >
                    <Image
                      source={require("../../../assets/more.png")}
                      style={{ height: 16, width: 16 }}
                    />
                  </TouchableOpacity>
                </Right>
              </CardItem>

              <CardItem>
                {arr.postType !== "text" &&
                  <Image
                    source={{ uri: arr.media[0] }}
                    style={{ height: 200, width: "100%" }}
                  />
                }
                <Body>
                  <Text>{arr.postText}</Text>
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
                    <Text style={styles.text}>{arr.comments.length} Comments</Text>
                  </Button>
                </Right>
              </CardItem>
            </View>
          )
          ) :
            <ActivityIndicator size="small" color="#00ff00" />
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(withNavigation(PostsContent));

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd"
  },
  containerInner: {
    marginBottom: 12
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 80
  },
  text: {
    fontSize: 12
  },
  date: {
    fontSize: 12,
    color: "#555759"
  },
  postText: {
    color: "#212529"
  }
});
