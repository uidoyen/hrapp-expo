import React, { Component } from "react";
import { Text, Container, Content } from "native-base";
import { connect } from "react-redux";
import CustomHeader from "../../UI/CustomHeader";
import AddPost from "./AddPost";
import PostsContent from "./PostsContent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    // this.props.navigation.navigate("MediaUpload");
    return (
      <Container>
        <CustomHeader navigation={this.props.navigation} />
        <Content>
          <AddPost navigation={this.props.navigation} />
          <PostsContent />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps)(Home);
