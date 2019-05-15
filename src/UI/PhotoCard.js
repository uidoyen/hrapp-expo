import React, { Component } from 'react';
import { Card, Avatar } from 'react-native-paper';
import { StyleSheet, Image, ScrollView, Text } from 'react-native';

class PhotoCard extends Component {
    render() {
        return (
            <Card style={styles.outerCard}>
                <Text style={styles.title} >Photos</Text>
                <Card.Content style={styles.photoCard}>
                    <Image style={styles.photoview} source={require('../../images/cover.jpg')} />
                    <Image style={styles.photoview} source={require('../../images/cover.jpg')} />
                    <Image style={styles.photoview} source={require('../../images/cover.jpg')} />
                    <Image style={styles.photoview} source={require('../../images/cover.jpg')} />
                </Card.Content>
            </Card>
        )
    }
}
const styles = StyleSheet.create({
    photoview: {
        width: 150,
        height: 110,
        margin: 5
    },
    photoCard: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    outerCard: {
        height: 300,
        marginTop: 20
    },
    title: {
        backgroundColor: '#673AB7',
        color: '#fff',
        paddingVertical: 8,
        fontWeight: '500',
        fontSize: 20,
        paddingLeft: 10
    }
})
export default PhotoCard;
