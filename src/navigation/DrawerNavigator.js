import React from "react";
import { StyleSheet, Dimensions, Image, Text } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import {
  Container,
  Content,
  Thumbnail,
  Header,
  Body,
  Left,
  Right,
  Button
} from "native-base";
import MembersScreen from "../screens/Members/MemberScreen";
// import CommunityScreen from "../Screens/Community/CommunityScreen";
// import UserProfileScreen from "../Screens/UserProfile/UserProfileScreen";
// import AskLeaderScreen from "../Screens/AskLeader/partial/AskLeaderScreen";
// import MyConnectionsScreen from "../Screens/MyConnections/MyConnections";
// import MyPendingConnectionsScreen from "../Screens/MyConnections/MyPendingConnections";
// import Home from "../home/index";
import Login from "../screens/Auth/Login";
// import Events from "../Screens/Events/Events";
// import EventDetails from "../Screens/EventDetails/EventDetails";
// import Giev from "../Screens/Giev/Giev";
// import Wishes from "../Screens/Wishes/Wishes";
// import AuthLoading from "../Screens/Auth/AuthLoading";
import Logout from "../screens/Auth/Logout";
import Home from "../screens/Home/index";
// import MembersProfile from "../Screens/Members/MembersProfile";
// import Comments from "../Screens/Home/partials/Comments";
import DrawerHeader from "./DrawerHeader";
// import CommunityProfile from '../Screens/Community/CommunityProfile'
// import AskLeaderQuestions from "../Screens/QuestionsForMe/partial/AskLeaderQuestions";

const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
const WIDTH = Dimensions.get("window").width;

const CustomDrawerContentComponent = props => (
  <Container>
    <DrawerHeader />
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const DrawerConfig = {
  drawerWidth: WIDTH * 0.63,
  contentComponent: CustomDrawerContentComponent,
  initialRouteName: "Home"
};

// const EventStackNavigator = createStackNavigator({
//   Event: Events,
//   EventPartial: EventDetails
// }, {
//     initialRouteName: 'Event',
//   })

// const MemberStackNavigator = createStackNavigator({
//   Member: MembersScreen,
//   MembersProfile: MembersProfile
// }, {
//     initialRouteName: 'Member',
//   })

const HomeStackNavigator = createStackNavigator({
  Home: Home
})

// const CommunityStackNavigator = createStackNavigator({
//   CommunityScreen: CommunityScreen,
//   CommunityProfile: CommunityProfile
// }, 
// {
//   initialRouteName: 'CommunityScreen',
// })

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator
    },
    // Members: {
    //   screen: MemberStackNavigator
    // },
    // Community: {
    //   screen: CommunityStackNavigator
    // },
    // UserProfile: {
    //   screen: UserProfileScreen
    // },
    // MyConnections: {
    //   screen: MyConnectionsScreen
    // },
    // MyPendingConnecions: {
    //   screen: MyPendingConnectionsScreen
    // },
    // AskLeader: {
    //   screen: AskLeaderScreen
    // },
    // QuestionsForMe: {
    //   screen: AskLeaderQuestions
    // },
    // Events: {
    //   screen: EventStackNavigator
    // },
    // Giev: {
    //   screen: Giev
    // },
    // Wishes: {
    //   screen: Wishes
    // },
    Logout: {
      screen: Logout
    }
  },
  DrawerConfig);

const LoginStackNavigator = createStackNavigator({
  Login: Login
})

const AppSwitchNavigator = createSwitchNavigator({
  //AuthLoading: AuthLoading,
  Auth: LoginStackNavigator,
  AppDrawer: DrawerNavigator
})


export default createAppContainer(AppSwitchNavigator);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#673AB7",
    color: 'white'
  },
  content: {
    color: "white",
    textAlign: "left"
  },
  drawerHeader: {
    backgroundColor: "#673AB7",
    height: 100
  },
  drawerImageContainer: {
    width: 100
  },
  drawerImage: {
    height: 60,
    width: 60
  }
});
