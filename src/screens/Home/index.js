import React, {Component} from "react";
import { Text, Container, Content} from "native-base";
import { connect } from 'react-redux';
//import { increment } from '../../actions';

import CustomHeader from "../../UI/CustomHeader";

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  render() {
    return (
      <Container>
      <CustomHeader navigation={this.props.navigation} />
      <Content>
        <Text>Content</Text>
      </Content>
    </Container>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      i: state.blank.i,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
      increment: () => dispatch(increment()),
    };
};

export default connect(mapStateToProps)(Home);
