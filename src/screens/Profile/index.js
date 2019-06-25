import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, SafeAreaView, TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';
import { Left, Right, Body, Title } from 'native-base';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import ProfileDetails from './ProfileDetails.tsx';

class Hidden extends React.Component {
    render() {
        return null;
    }
}
class Profile extends Component {

    static navigationOptions = ({ navigation }) => ({
        header: null,
        drawerLabel: <Hidden />
    })

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View>
                    <View style={{ backgroundColor: '#673AB7', height: 50, flexDirection: 'row', paddingHorizontal: 10 }}>
                        <Left style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                                <AntDesign name="bars" size={32} color="white" />
                            </TouchableOpacity>
                        </Left>
                        <Body style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                            <Title style={{ color: 'white' }}>PROFILE</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Ionicons name="ios-arrow-back" size={32} color="white" style={styles.menuIcon} />
                            </TouchableOpacity>
                        </Right>
                    </View>
                </View>
                <ScrollView style={styles.container}>
                    <ProfileDetails {...this.props} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Profile)

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})