import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TextInput, Image, Platform } from "react-native";
import { Container, Header, Thumbnail, Content, shareImage, Button } from 'native-base';
import { addPost } from '../../actions/postActions';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  updateInputState = (key, value) => {
    this.setState(prevState => {
      return {
        ...prevState,
        [key]: value
      }
    })
  }

  onPostSubmitHandler = () => {
    this.props.addPost({ postText: this.state.text })
  }

  render() {
    console.log(this.props)
    return (
      <Container style={{ flexDirection: 'column', height: 150 }}>
        <View style={{
          flexDirection: 'row',
        }}>
          asas
        </View>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { addPost })(AddPost);

const styles = StyleSheet.create({
  avatar: {
    marginTop: '12%',
    marginLeft: '15%',
    width: 60,
    height: 60,
  },
  shareImage: {
    padding: '3%'
  },
  textInput: {
    marginTop: '2%'
  },
  grayBg: {
    paddingHorizontal: '7%',
    paddingVertical: 0,
    borderRadius: 20
  },
  shareBtn: {
    backgroundColor: '#673AB7',
    paddingHorizontal: '7%',
    borderRadius: 20
  }
})