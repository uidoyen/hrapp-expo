import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Icon, Button, Container, Header, Content, Textarea, Form, Card, CardItem, Text, Left, Body, Right, Thumbnail } from 'native-base'
import { connect } from 'react-redux';
import { getPosts, likePost, unlikePost, getPostId } from "../../../actions/postActions";
import { withNavigation } from 'react-navigation';

class Comments extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Go Back',
    headerStyle: {
      backgroundColor: '#017cbf',
    }
  })

  state = {
    _id: ''
  }

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
    if (likes) {
      if (likes.filter(like => like.user === auth.user.id).length > 0) {
        return true;
      } else {
        return false;
      }
    }


  }
  commentHandler = (id) => {
    console.log(this.props)
    this.props.navigation.navigate('Comments', { _id: id })
  }
  //   componentDidMount() {
  //     console.log('post content section')
  //     console.log(this.props)
  //     this.props.getPosts()
  //   }


  componentWillMount() {
    console.log('component mount')
    console.log(this.props.navigation.state.params._id)
    this.props.getPostId(this.props.navigation.state.params._id);
  }

  //   componentDidUpdate(){
  //     console.log('component mount')
  //     console.log(this.props.navigation.state.params._id)
  //     this.props.getUserProfilesById(this.props.navigation.state.params._id);
  // }
  commentsDidMount() {
    this.props.getPostId()
  }
  handleLike = (id) => {
    this.props.likePost(id)
  }

  handleUnLike = (id) => {
    this.props.unlikePost(id)
  }

  addCommentsHandler = (e, id) => {
    e.preventDefault();
    const formData = {
      text: this.state.text,
    }
    this.props.addComments(formData, id, this.props.history);
    this.setState({
      text: ''
    })
    console.log(id)

  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  showCommentsAreaHandle = () => {
    this.setState(prevState => ({
      comments: !prevState.comments
    }));
  }

  render() {

    const { params } = this.props.navigation.state;
    const { post } = this.props;
    console.log(params)
    console.log(this.props)
    return (
      <Container>
        <Content>
          {
            post.post !== null ? <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{ uri: 'https://cdn.business2community.com/wp-content/uploads/2014/12/Super-Mario-no-longer-the-007.jpg' }} />
                  <Body>
                    <Text>{post.post ? post.post.name : null}</Text>
                    {/* <Text note>GeekyAnts</Text> */}
                  </Body>
                </Left>
              </CardItem>
              {
                post.media ? <CardItem>
                  <Image source={{ uri: post.media[0] }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem> : null
              }
              <CardItem>
                <Body>
                  <Text>
                    {post.post ? post.post.postText : null}
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  {
                    this.userAlreadyLiked(post.likes) ? <Button transparent onPress={() => this.handleUnLike(post._id)}>
                      <Icon active name="heart" />
                    </Button>
                      : <Button transparent onPress={() => this.handleLike(post._id)}>
                        <Icon active name="heart" />
                      </Button>
                  }
                </Left>
                <Right>
                  <Button transparent>
                    <Icon active name="chatbubbles" />
                    <Text style={{ color: '#7e57c2' }}>{post.post.comments ? post.post.comments.length : null}&nbsp;Comments</Text>
                  </Button>
                </Right>
              </CardItem>
              <CardItem>

                {
                  post.post.comments ?

                    post.post.comments.map((comment) => {
                      return (
                        <CardItem key={comment._id}>
                          <Left>{
                            comment.avatar ? <Thumbnail source={{ uri: comment.avatar }} /> : null
                          }

                            <Body>
                              <Text>{comment.name ? comment.name : null}</Text>
                              {/* <Text note>GeekyAnts</Text> */}
                            </Body>
                          </Left>
                          <Body>
                            <Text>{comment.text ? comment.text : null}</Text>
                          </Body>
                        </CardItem>
                      )



                    })


                    : null
                }


              </CardItem>
            </Card> : null
          }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth

})

export default connect(mapStateToProps, { getPostId, getPosts, likePost, unlikePost })(withNavigation(Comments));


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 80
  }
});
