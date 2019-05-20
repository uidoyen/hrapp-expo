import React, {Component} from "react";
import { Text, Container, Content} from "native-base";
import { connect } from 'react-redux';
import CustomHeader from "../../UI/CustomHeader";
import AddPost from './AddPost';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <Container>
      <CustomHeader navigation={this.props.navigation} />
      <Content>
        <Text>Content1</Text>
        <AddPost />
      </Content>
    </Container>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
};

export default connect(mapStateToProps)(Home);
