import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import QRCodeProfile from './QRCode';

const Chat = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const Contacts = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

type Route = {
  key: string;
  icon: string;
};

type State = NavigationState<Route>;

export default class ProfileDetails extends React.Component<{}, State> {
  static title = 'Top tab bar with icons';
  static backgroundColor = '#e91e63';
  static appbarElevation = 0;

  state = {
    index: 0,
    routes: [
      { key: 'contacts', icon: 'md-contact' },
      { key: 'qrcode', icon: 'ios-barcode' },
    ],
  };

  private handleIndexChange = (index: number) =>
    this.setState({
      index,
    });

  renderIcon = ({ route, color }: { route: Route; color: string }) => {
    return (
      <Ionicons name={route.icon} size={24} color={color} />
    )
  };

  private renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        renderIcon={this.renderIcon}
        style={styles.tabbar}
      />
    );
  };

  // private renderScene = SceneMap({
  //   contacts: Contacts,
  //   qrcode: <QRCode prop={this.props} />
  //   const FirstRoute = () => <ListMahasiswa />;
  // });

  render() {
    return (
      <TabView
        lazy
        navigationState={this.state}
        renderScene={SceneMap({
          contacts: Contacts,
          qrcode: () => <QRCodeProfile foo={this.props.profile} />,
        })}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#ff7901',
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
});