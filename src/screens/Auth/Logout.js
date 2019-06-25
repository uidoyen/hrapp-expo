import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, AsyncStorage } from "react-native";
import { logoutUser } from '../../actions/authAction';

export class Logout extends Component {
    componentWillMount() {
        AsyncStorage.clear();
        this.props.logoutUser()
    }

    render() {
        const { auth } = this.props;
        if (auth.isAuthenticated === false) {
            this.props.navigation.navigate("Login")
        }
        return (
            <View>
                <Text>Logout</Text>
            </View>
        )
    }

}

const mapStateToProps = state => {
    return state
};
export default connect(mapStateToProps, { logoutUser })(Logout);
