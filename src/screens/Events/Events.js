import React, { Component } from 'react';
import { SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import CustomHeader from '../../UI/CustomHeader';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/eventAction';

import moment from "moment";

class Events extends Component {
  static navigationOptions = ({ navigation }) => ({
    // title: "Events",
    // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    header: null,
    drawerLabel: 'Events',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../assets/home.png')}
    //     style={styles.icon}
    //   />
    // ),
  })
  //  goto = () => {
  //   this.props.navigation.push('EventPartial')
  //  }

  componentDidMount() {
    this.props.getEvents()
  }

  eventDetailHandler = (eventItem) => {
    this.props.navigation.navigate('EventDetails', { eventItem: eventItem, auth: this.props.auth.user })
  }

  render() {
    const { events } = this.props.events;
    console.log("events", events)
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <CustomHeader navigation={this.props.navigation} title="Events" icon="ios-notifications" />
        <Content>
          {events === null ? null : events.map((eventItem) => {
            return (
              <Card key={eventItem._id}>
                <TouchableOpacity onPress={() => this.eventDetailHandler(eventItem)} style={{ flex: 1 }}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text onPress={() => this.eventDetailHandler(eventItem._id)}>{eventItem.eventTitle} </Text>
                        <Text note>{moment(eventItem.date).format('MMMM Do YYYY, h:mm a')}, {eventItem.location} </Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody >
                    {eventItem.media !== null ? <Image source={{ uri: eventItem.media }} style={{ height: 200, width: null, flex: 1 }} /> : null}
                  </CardItem>
                  <CardItem style={styles.eventBg}>
                    <Left>
                      {
                        eventItem.registrationRequired ? <Text style={styles.registrationText} >Registration required</Text>
                          : null
                      }
                    </Left>
                  </CardItem>
                </TouchableOpacity>
              </Card>
            )
          })}
        </Content>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
  auth: state.auth
})


const styles = StyleSheet.create({
  eventBg: {
    backgroundColor: '#673ab7',
  },
  registrationText: {
    color: 'white',
  }
});


export default connect(mapStateToProps, { getEvents })(withNavigation(Events));

