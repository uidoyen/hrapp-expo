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
// import MembersScreen from "../screens/Members/MemberScreen";
// import CommunityScreen from "../Screens/Community/CommunityScreen";
// import UserProfileScreen from "../Screens/UserProfile/UserProfileScreen";
// import AskLeaderScreen from "../Screens/AskLeader/partial/AskLeaderScreen";
// import MyConnectionsScreen from "../Screens/MyConnections/MyConnections";
// import MyPendingConnectionsScreen from "../Screens/MyConnections/MyPendingConnections";
// import Home from "../home/index";
import Login from "../screens/Auth/Login";
import Events from "../screens/Events/Events";
import EventDetails from "../screens/Events/EventDetails";
import ScanQRCode from "../screens/Events/ScanQRCode";
// import Giev from "../screens/Giev/Giev";
// import Wishes from "../Screens/Wishes/Wishes";
// import AuthLoading from "../Screens/Auth/AuthLoading";
import Logout from "../screens/Auth/Logout";
import Home from "../screens/Home/index";
import AddPost from "../screens/Home/AddPost";
// import MembersProfile from "../Screens/Members/MembersProfile";
// import Comments from "../Screens/Home/partials/Comments";
import DrawerHeader from "./DrawerHeader";
// import CommunityProfile from '../Screens/Community/CommunityProfile'
// import AskLeaderQuestions from "../Screens/QuestionsForMe/partial/AskLeaderQuestions";

import CameraRollSelect from "../screens/Home/CameraRollSelect";
import Gievs from "../screens/Giev";
import MembersScreen from "../screens/Members/index";
import Profile from "../screens/Profile";
import Notification from "../screens/Notification";
import GetStarted from "../screens/Auth/GetStarted";
import UserfulApp from "../screens/External/UserfulApp";
import Brandstore from "../screens/External/Brandstore";

const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
const WIDTH = Dimensions.get("window").width;

const CustomDrawerContentComponent = props => (
  <Container>
    <DrawerHeader {...props} />
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const DrawerConfig = {
  drawerWidth: WIDTH * 0.63,
  contentComponent: CustomDrawerContentComponent,
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};

const EventStackNavigator = createStackNavigator({
  Event: Events,
  EventDetails: EventDetails,
  ScanQRCode: ScanQRCode
}, {
    initialRouteName: 'Event',
  })

const HomeStackNavigator = createStackNavigator({
  Home: Home,
  AddPost: AddPost,
  Profile: Profile
}, {
    initialRouteName: 'Home',
  })

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator
    },
    // Members: {
    //   screen: MembersScreen
    // },
    Events: {
      screen: EventStackNavigator
    },
    // Profile: {
    //   screen: Profile
    // },
    Notification: {
      screen: Notification
    },
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
    Giev: {
      screen: Gievs
    },
    Brandstore: {
      screen: Brandstore
    },
    UserfulApp: {
      screen: UserfulApp
    },
    Logout: {
      screen: Logout
    }
  },
  DrawerConfig
);

const LoginStackNavigator = createStackNavigator({
  Login: Login
});

const MediaStackNavigator = createStackNavigator({
  Media: CameraRollSelect
});

const AppSwitchNavigator = createSwitchNavigator({
  //AuthLoading: AuthLoading,
  Auth: LoginStackNavigator,
  AppDrawer: DrawerNavigator,
  MediaUpload: MediaStackNavigator
});

export default createAppContainer(AppSwitchNavigator);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#673AB7",
    color: "white"
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
