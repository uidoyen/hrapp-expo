import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, ScrollView, View } from 'react-native';
import CustomHeader from "../../UI/CustomHeader";

class Hidden extends React.Component {
    render() {
        return null;
    }
}

export class Notification extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null,
        drawerLabel: <Hidden />
    })
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView>
                    <CustomHeader navigation={this.props.navigation} title="Notifications" icon="ios-notifications" />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
