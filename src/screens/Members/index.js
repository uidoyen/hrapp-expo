import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Icon, Button, Container, Header, Content, Card, CardItem, Text, Left, Body, Right, Thumbnail } from 'native-base'
import CustomHeader from "../../UI/CustomHeader";
import { getAllProfiles, getUserProfilesById, getUserProfile, postConnect } from '../../actions/profileAction';
// import { makeLeader } from '../../actions/askLeaderAction';
import placeholder from '../../../assets/placeholder.png';
import { connect } from 'react-redux'

class MembersScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null, drawerLabel: 'Members',
        // drawerIcon: ({ tintColor }) => (
        //     <Image
        //         source={require('../../../assets/home.png')}
        //         style={styles.icon}
        //     />
        // ),
    })

    state = {

    }

    gotToMember = (id) => {
        console.log(id)
        this.props.navigation.navigate('MembersProfile', { _id: id })
    }

    componentDidMount() {
        this.props.getAllProfiles();
        // this.props.getUserProfile();
    }

    makeLeaderHandler = (leaderId, leaderName) => {
        this.props.makeLeader(leaderId, leaderName)
        // toast.success(`${leaderName} is now leader`);
    }

    connectToPeople = (id) => {
        const data = {
            profile_id: id
        }
        console.log(data)
        this.props.postConnect(data)
        // toast.success(`Request sent`);
    }

    goToThatProfilelHandler = (profileId) => {
        console.log(profileId);
        this.props.getUserProfilesById(profileId);
        this.props.navigation.navigate('');
        // console.log(this.props)
    }
    render() {
        const { profile } = this.props;
        // console.log(profile.profiles)
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView>
                    <CustomHeader navigation={this.props.navigation} title="Members" icon="ios-notifications" />
                    {
                        profile.profiles.length > 0 ? profile.profiles.map((item, index) => (
                            <Card key={item._id}>
                                <TouchableOpacity onPress={() => this.gotToMember(item.user._id)}>
                                    <CardItem>
                                        <Left>
                                            <Thumbnail style={styles.avatar} source={{ uri: item.avatar }} />
                                        </Left>
                                        <Body style={{ alignItems: 'flex-start' }}>
                                            {/* <Text>{item.user.name}</Text> */}
                                            <Text note>{item.status}</Text>
                                            <Text note>{item.location}</Text>
                                            <Body style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                                <Left>
                                                    <Button style={styles.btn} small >
                                                        <Text style={styles.text} >CONNECT</Text>
                                                    </Button>
                                                </Left>
                                                <Right>
                                                    <Button style={styles.btn} small>
                                                        <Text style={styles.text}>MAKE LEADER</Text>
                                                    </Button>
                                                </Right>
                                            </Body>
                                        </Body>
                                    </CardItem>
                                </TouchableOpacity>
                            </Card>
                        )) : (
                                <ActivityIndicator size="small" color="#00ff00" />
                            )
                    }
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile

})

export default connect(mapStateToProps, { getAllProfiles, getUserProfile, getUserProfilesById, postConnect })(MembersScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 8,
        color: 'white'
    },
    btn: {
        backgroundColor: '#673AB7'
    },
    icon: {
        width: 24,
        height: 24,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50
    }
});