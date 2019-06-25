import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Header, Body, Title, Item, Left, Icon, Right, Input, Button, Text, Badge } from 'native-base'
import { Ionicons, AntDesign } from '@expo/vector-icons';
export default class CustomHeader extends React.Component {
	state = {
		search: '',
	};
	updateSearch = search => {
		this.setState({ search });
	};
	render() {
		return (
			<View>
				<View style={{ backgroundColor: '#673AB7', height: 60, flexDirection: 'row', paddingHorizontal: 10 }}>
					<Left style={{ flex: 1 }}>
						<TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
							<AntDesign name="bars" size={36} color="white" />
						</TouchableOpacity>
					</Left>
					<Body style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
						{this.props.title && <Title style={{ color: 'white' }}>{this.props.title}</Title>}
						{!this.props.title && <Image
							source={require('../../assets/100-white.png')}
							style={{ width: 150, height: 60, resizeMode: 'contain' }}
						/>}
					</Body>
					<Right style={{ flex: 1 }}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Notification')}>
							<Badge style={{ top: -5, right: -10, paddingTop: 0, paddingBottom: 0, position: 'absolute', zIndex: 2 }}><Text style={{ fontSize: 11 }}>2</Text></Badge>
							<Ionicons name={this.props.icon} size={38} color="white" style={styles.menuIcon} />
						</TouchableOpacity>
					</Right>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	menuIcon: {
		color: 'white'
	},
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	img: {
		height: 30,
		width: 120
	}
})