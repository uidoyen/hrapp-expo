import React, { Component } from 'react'
import { View, Text, StyleSheet, } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';



class UserCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar.Image style={styles.avatar} size={150} source={require('../../images/tom-cruise.jpg')} />
        <Card style={styles.cardTitle}>
          <Text style={styles.userName}>{this.props.userName}</Text>
          <Text style={styles.designation}>{this.props.designation}</Text>
          <Text style={styles.location}>{this.props.location}</Text>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingHorizontal:'8%'
  },
  avatar: {
    top: 30
  },
  cardTitle: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',

  },
  userName: {
    fontWeight: '500',
    fontSize: 22,
    paddingBottom: 10
  },
  designation: {
    marginTop: 5
  },
  location: {
    marginTop: 5,
    paddingBottom: '10%'

  }
});

export default UserCard;