import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native';
import { Header, Body, Title, Content, Left, Icon, Right, Center, Thumbnail } from 'native-base'
import QRCode from 'react-native-qrcode';

export class QRCodeProfile extends Component {
    render() {
        const { userProfile } = this.props.state.profile;
        // console.log(userProfile)
        return (
            <View style={styles.container}>
                <Thumbnail
                    source={{ uri: userProfile.avatar }}
                    large
                />
                <Body style={{
                    alignItems: "flex-start",
                    alignItems: 'center',
                    marginBottom: 30
                }}>
                    <Text bold style={{ fontWeight: "bold" }}>
                        {userProfile.user.name}
                    </Text>
                    <Text note>
                        {userProfile.user.role}
                    </Text>
                    <Text note>
                        {userProfile.user.email}
                    </Text>
                </Body>
                <QRCode
                    value={{
                        name: userProfile.user.name,
                        Designation: userProfile.user.role,
                        Designation: userProfile.user.email
                    }}
                    size={200}
                    bgColor='#673AB7'
                    fgColor='white' />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    state
})

export default connect(mapStateToProps)(QRCodeProfile)

const styles = StyleSheet.create({
    SafeAreaView: {
        backgroundColor: "#fff",
        flex: 1
    },
    container: {
        paddingTop: 10,
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gievs: {
        marginBottom: 12
    },
    button: {
        paddingHorizontal: 15,
        backgroundColor: 'orange'
    },
    childName: {
        color: 'white',
        fontSize: 14,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    childLocation: {
        color: 'white',
        fontSize: 12
    }
})