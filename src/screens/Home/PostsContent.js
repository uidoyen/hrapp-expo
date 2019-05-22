import React, { Component } from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

import {
  Container,
  Header,
  Content,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  ActionSheet
} from "native-base";
import { getPosts } from "../../actions/postActions";
import { withNavigation } from "react-navigation";
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

  openLightBox = () => {
    this.setState({ isOpen: true });
  };

  handleLike = id => {
    this.props.likePost(id);
  };

  handleUnLike = id => {
    this.props.unlikePost(id);
  };

  userAlreadyLiked = likes => {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  };
  commentHandler = id => {
    this.props.navigation.navigate("Comments", { _id: id });
  };
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
    var DESTRUCTIVE_INDEX = 3;
    var CANCEL_INDEX = 4;
    return (
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <CardItem>
            <Left>
              <Thumbnail source={require("../../../assets/76161.jpg")} />
              <Body>
                <Text>GeekyAnts</Text>
                <Text style={styles.date}>May 19, 2019 9:52 PM</Text>
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
                      title: "Testing ActionSheet"
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
            <Image
              source={require("../../../assets/76161.jpg")}
              style={{ height: 200, width: "100%" }}
            />
            <Body>
              <Text>dfdsfsdfs</Text>
            </Body>
          </CardItem>

          <CardItem style={{ paddingTop: 0, paddingBottom: 0 }}>
            <Left>
              <Button transparent onPress={() => this.handleLike()}>
                <Icon size={22} color="#d62111" name="heart-o" />
                <Text style={styles.text}>1</Text>
              </Button>
            </Left>
            <Right>
              <Button transparent onPress={() => this.commentHandler()}>
                <Icon size={22} color="#673AB7" name="comment-o" />
                <Text style={styles.text}>1 Comments</Text>
              </Button>
            </Right>
          </CardItem>
        </View>
        <View style={styles.containerInner}>
          <CardItem>
            <Left>
              <Thumbnail source={require("../../../assets/76161.jpg")} />
              <Body>
                <Text>GeekyAnts</Text>
                <Text style={styles.date}>May 19, 2019 9:52 PM</Text>
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
                      title: "Testing ActionSheet"
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
            <Body>
              <Text style={styles.postText}>dfdsfsdfs</Text>
            </Body>
          </CardItem>

          <CardItem>
            <Left>
              <Button transparent onPress={() => this.handleLike()}>
                <Icon size={22} color="#d62111" name="heart-o" />
                <Text style={styles.text}>1</Text>
              </Button>
            </Left>
            <Right>
              <Button transparent onPress={() => this.commentHandler()}>
                <Icon size={22} color="#673AB7" name="comment-o" />
                <Text style={styles.text}>1 Comments</Text>
              </Button>
            </Right>
          </CardItem>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

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
