import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, SafeAreaView, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { Left, Right, Body, Title, Text, Button } from 'native-base';
import { Ionicons, AntDesign, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import moment from 'moment';

class Hidden extends React.Component {
    render() {
        return null;
    }
}
export class EventDetails extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null,
        drawerLabel: <Hidden />
    })
    state = {
        firstQuery: ''
    }
    gotoScan = (id) => {
        this.props.navigation.navigate('ScanQRCode', { _eventId: id })
    }
    register = () => {
        
    }
    render() {
        const { eventItem, auth } = this.props.navigation.state.params;
        const { firstQuery } = this.state;
        console.log("auth..................", auth)
        console.log(eventItem)
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
                            <Title style={{ color: 'white' }}>Event Details</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Ionicons name="ios-arrow-back" size={32} color="white" style={styles.menuIcon} />
                            </TouchableOpacity>
                        </Right>
                    </View>
                </View>
                <ScrollView style={styles.container}>
                    <Title style={{ paddingTop: 15, paddingBottom: 10 }}>{eventItem.eventTitle}</Title>
                    <Image source={{ uri: eventItem.media }} style={{ height: 200, width: null, flex: 1 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                        <View style={{ alignItems: 'center', padding: 10 }}>
                            <Ionicons name="ios-calendar" size={22} color="#673AB7" />
                            <Text style={styles.textColor}>{moment(eventItem.date).format('MM-DD-YYYY')}</Text>
                        </View>
                        <View style={{ alignItems: 'center', padding: 10 }}>
                            <Ionicons name="md-time" size={24} color="#673AB7" />
                            <Text style={styles.textColor}>9:00 AM - 12:00 PM</Text>
                        </View>
                        <View style={{ alignItems: 'center', padding: 10 }}>
                            <EvilIcons name="location" size={28} color="#673AB7" />
                            <Text style={styles.textColor}>{eventItem.location}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }}>
                        <Text style={{ padding: 10 }}>{eventItem.description}</Text>
                        {auth.role == "user" && <Button style={{ backgroundColor: '#673AB7', marginTop: 20, marginLeft: 125 }} onPress={this.register}>
                            <Text>Register Now</Text>
                        </Button>
                        }
                    </View>
                    {eventItem.QRScan &&
                        auth.role == "superadmin" &&
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#FFF',
                            paddingTop: 40,
                            paddingBottom: 10
                        }}>
                            <Text>SCAN NOW</Text>
                            <TouchableOpacity onPress={() => this.gotoScan(eventItem._id)}>
                                <MaterialCommunityIcons name="barcode-scan" size={140} color="#673AB7" />
                            </TouchableOpacity>
                            <Text style={{ paddingBottom: 10 }}>OR, SEARCH BY EMPLOYEE ID</Text>
                            <View style={{ paddingHorizontal: 20, width: 300 }}>
                                <Searchbar
                                    placeholder="Search..."
                                    onChangeText={query => { this.setState({ firstQuery: query }); }}
                                    value={firstQuery}
                                />
                            </View>
                        </View>
                    }
                </ScrollView>
                {/* <CustomHeader navigation={this.props.navigation} title={eventItem.eventTitle} icon="ios-notifications" /> */}
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textColor: {
        color: '#666666',
        fontSize: 12
    }
})