import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { Container, Header, Content, DeckSwiper, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';
import { getPosts, likePost, unlikePost, getPostId } from "../../../actions/postActions";
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

class PostsContent extends Component {
  state = {
    expanded: false,
    photoIndex: 0,
    isOpen: false,

  };

  openLightBox = () => {
    this.setState({ isOpen: true })
  }

  handleLike = (id) => {
    this.props.likePost(id)
  }

  handleUnLike = (id) => {
    this.props.unlikePost(id)
  }


  userAlreadyLiked = (likes) => {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }

  }
  commentHandler = (id) => {
    console.log(this.props)
    this.props.navigation.navigate('Comments', { _id: id })
  }
  componentDidMount() {
    console.log('post content section')
    console.log(this.props)
    this.props.getPosts()
  }

  // componentDidUpdate() {
  //   console.log('post content section second')
  //  this.props.getPosts()
  // }

  render() {
    console.log(this.props)
    const { posts } = this.props.post;
    return (
      <View>
        {posts === null ? <View></View> :
          posts.map((post) => {
            return (
              <Card key={post._id}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: post.avatar }} />
                    <Body>
                      <Text >{post.name}</Text>
                      {/* <Text note>GeekyAnts</Text> */}
                    </Body>
                  </Left>
                </CardItem>
                {
                  post.media[0] ? <CardItem>
                    <Image source={{ uri: post.media[0] }} style={{ height: 200, width: null, flex: 1 }} />
                  </CardItem> : null
                }

                {/* <CardItem cardBody>
            {post.media === null ? <View></View> :
            // <DeckSwiper dataSource={post.media} renderItem={item =>    
              <Image source={{ uri:  item}} style={{ height: 200, width: null, flex: 1 }} />
            }
            
            </CardItem> */}
                <CardItem>
                  <Body>
                    <Text style={styles.postText}>
                      {
                        post.postText
                      }
                    </Text>
                  </Body>
                </CardItem>
                {/* {
              post.postText === null ? <View></View> :    <CardItem>
             
            </CardItem>
            } */}

                <CardItem>
                  <Left>
                    {
                      this.userAlreadyLiked(post.likes) ? <Button transparent onPress={() => this.handleUnLike(post._id)}>
                        <Icon size={25} color="#d62111" name="heart" />

                      </Button>
                        : <Button transparent onPress={() => this.handleLike(post._id)}>
                          <Icon size={25} color="#d62111" name="heart-o" />
                        </Button>
                    }
                    <Text> {post.likes.length}</Text>
                    {/* <Button transparent>
                  <Icon name="heart" />
                  <Text>12 Likes</Text>
                  <Icon name="heart-outline" />
                </Button> */}
                  </Left>
                  <Right>
                    <Button transparent onPress={() => this.commentHandler(post._id)}>
                      <Icon size={25} color="#673AB7" name="comment-o" />
                      <Text>{post.comments.length} Comments</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
            )
          })
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { getPosts, likePost, unlikePost, getPostId }
)(withNavigation(PostsContent));

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 80
  },
  text: {
    fontSize: 12
  },
  postText: {
    color: '#212529'
  }
})