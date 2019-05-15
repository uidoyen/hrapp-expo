import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Header, Body, Title, Content, Left, Icon, Right, Center } from 'native-base'
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
				<Header style={{ backgroundColor: '#673AB7' }}>
					<Left style={{ flex: 1 }}>
						<Icon
							style={styles.menuIcon}
							name="ios-menu"
							onPress={() => this.props.navigation.toggleDrawer()}
						/>
					</Left>
					<Body style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
						{/* <Title>{this.props.title}</Title> */}
						<Image style={styles.img} source={require('../../assets/Logo.png')} />
					</Body>
					<Right style={{ flex: 1 }}>
						<Icon
							name="notifications"
							size={32}
							style={styles.menuIcon}
						/>
					</Right>
				</Header>
				
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
		backgroundColor: 'red'
	},
	img: {
		height: 30,
		width: 120
	}
})