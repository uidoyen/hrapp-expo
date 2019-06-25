import React, { Component } from 'react';
import { Image, StyleSheet, WebView, Modal, Dimensions, ActivityIndicator, TouchableHighlight } from 'react-native';
import { Thumbnail, Header, View, DeckSwiper, Card, CardItem, Button, Text, Left, Body, Icon, Right, H2 } from 'native-base';
import axios from 'axios';
import { API_GATEWAY } from '../../utils/config'
import { connect } from 'react-redux';
import { getGievs } from "../../actions/GievActions";
import { addWishesToCart } from "../../actions/addWishesToCart";
import { getCartItems } from "../../actions/getCartItems";
import { Ionicons, AntDesign } from '@expo/vector-icons';
let wishes = [];
var { height, width } = Dimensions.get('window');
const uri = "https://contents.mediadecathlon.com/p754340/k$c28451c177581da33409d1f7083c5971/multi-compartment-pouch-grey.jpg";

class GievsItem extends Component {
    state = {
        showModal: false,
        modalVisible: false,
        ack: '',
        ORDER_ID: "GIEV_PAYMENT_12222",
        TXN_AMOUNT: '50',
        CUST_ID: 'Customer001',
        MID: 'WSaTND19746694780839'
    }

    componentDidMount() {
        this.props.getGievs();
        this.props.getCartItems()
    }

    setModalVisible = visible => {
        this.props.setModalVisible(visible);
        //this.setState({ modalVisible: visible });
    }
    addWishesToCart = (data) => {
        const item = {
            form_id: data._id,
            registrationNo: data.child[0].cnNo,
            childName: data.child[0].childName,
            childAge: data.child[0].childAge,
            childGender: data.child[0].childGender,
            childLocation: data.child[0].childLocation,
            childClass: data.child[0].childClass,
            wishedFor: data.child[0].wishedFor,
            color: data.child[0].color,
            shoeSize: data.child[0].shoeSize,
            price: data.child[0].price,
            staffName: data.child[0].staffName,
            cnNo: data.child[0].cnNo,
            mobileNo: data.child[0].mobileNo,
            form: data.form
        };
        console.log(item)
        this.props.addWishesToCart(item);
    }
    handleResponse = title => {
        if (title == 'true') {
            this.setState({ showModal: false, ack: 'Your transaction was successful' });
        } else if (title == 'false') {
            this.setState({ showModal: false, ack: 'Oops! Something went wrong' })
        } else return;
    }

    paytmPay = () => {
        axios.post(`${API_GATEWAY}/api/payment`, data)
            .then(res => {
                console.log(res.data)
                this.setState({
                    params: {
                        CALLBACK_URL: res.data.data.params.CALLBACK_URL,
                        CHANNEL_ID: res.data.data.params.CHANNEL_ID,
                        CUST_ID: res.data.data.params.CUST_ID,
                        EMAIL: res.data.data.params.EMAIL,
                        INDUSTRY_TYPE_ID: res.data.data.params.INDUSTRY_TYPE_ID,
                        MID: res.data.data.params.MID,
                        MOBILE_NO: res.data.data.params.MOBILE_NO,
                        ORDER_ID: res.data.data.params.ORDER_ID,
                        TXN_AMOUNT: res.data.data.params.TXN_AMOUNT,
                        WEBSITE: res.data.data.params.WEBSITE,
                        CHECKSUMHASH: res.data.data.checksum
                    }
                })
                console.log(this.state.params)
                document.forms["submitPaytm"].submit()
            })
    }
    render() {
        let { showModal, ack, ORDER_ID, TXN_AMOUNT, CUST_ID, MID } = this.state;
        const { gievs } = this.props.gievs;
        const { cartItem } = this.props;
        console.log(cartItem)

        let price = cartItem.map((arr) => parseInt(arr.price));
        let total = price.reduce((sum, item) => sum + item, 0);

        // if (this.props.addToCart.addedKidWishesToCart === true) {
        //     this.setModalVisible(!this.props.modalVisible);
        // }

        return (
            <View style={{ backgroundColor: 'white' }}>
                {gievs.completed ? <DeckSwiper
                    dataSource={gievs.completed}
                    renderItem={item =>
                        <Card>
                            <CardItem style={styles.headBg}>
                                <Left>
                                    <Body>
                                        <Text style={styles.textColor}>{item.child ? item.child[0].childName : ''}</Text>
                                        <Text style={styles.textColor} note>{item.childLocation ? item.childLocation : ''}</Text>
                                    </Body>
                                </Left>

                            </CardItem>
                            <View>
                                <Image style={{ height: height - 250 }} source={{ uri: item.form }} />
                            </View>
                            <CardItem>
                                <Body>
                                    <Button full style={styles.gievBtn} onPress={() => { this.addWishesToCart(item) }}>
                                        <Text>Giev</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>
                    }
                /> : null}
                {/* <Modal visible={showModal} onRequestClose={() => { this.setState({ showModal: false }) }}>
                <WebView source={{ uri: "http://192.168.31.40:3001/api/paytm/request" }}
                    injectedJavaScript={`document.getElementById('ORDER_ID').value = "${ORDER_ID}";
                  document.getElementById('TXN_AMOUNT').value = "${TXN_AMOUNT}";
                  document.getElementById('CUST_ID').value = "${CUST_ID}";document.f1.submit()`}
                    onNavigationStateChange={data => this.handleResponse(data.title)} />
            </Modal>

            <TouchableOpacity onPress={() => this.setState({ showModal: true })}><Text>Pay with Paytm</Text></TouchableOpacity>
*/}

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <Card>
                        <Header>
                            <Left><H2>Cart</H2></Left>
                            <Right>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.props.modalVisible);
                                    }}>
                                    <AntDesign name="closecircle" size={32} color="black" />
                                </TouchableHighlight>
                            </Right>
                        </Header>
                        <View style={{ height: height - 90 }}>
                            {
                                cartItem.length > 0 ? cartItem.map((arr, index) => (
                                    <CardItem key={index} style={{ justifyContent: 'space-between' }}>
                                        <View>
                                            <Thumbnail square source={{ uri: arr.form }} />
                                        </View>
                                        <View><Text>{arr.childName}</Text></View>
                                        <View><Text>{arr.price}</Text></View>
                                        <View>
                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.setModalVisible(!this.props.modalVisible);
                                                }}>
                                                <Ionicons name="md-trash" size={24} color="red" />
                                            </TouchableHighlight>
                                        </View>
                                    </CardItem>
                                )
                                ) :
                                    <ActivityIndicator size="small" color="#00ff00" />
                            }

                            <View
                                style={{
                                    borderBottomColor: '#e4e4e4',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <CardItem style={{ justifyContent: 'space-between' }}>
                                <View><Text style={{ fontWeight: 'bold' }}>Grand Total</Text></View>
                                <View><Text style={{ fontWeight: 'bold' }}>Rs. {total}</Text></View>
                            </CardItem>
                            <View
                                style={{
                                    borderBottomColor: '#e4e4e4',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <CardItem>
                                <Button full style={styles.payBtn} onPress={() => { this.setState({ showModal: true }) }}>
                                    <Text>MAKE PAYMENT</Text>
                                </Button>
                            </CardItem>
                        </View>
                    </Card>
                </Modal>

                {/* <TouchableHighlight
                onPress={() => {
                    this.setModalVisible(true);
                }}>
                <Text>Show Modal</Text>
            </TouchableHighlight> */}
                {/* <View>
                <Modal visible={showModal} onRequestClose={() => { this.setState({ showModal: false }) }}>
                    <WebView source={{ uri: "http://192.168.31.40:3001/api/paytm/request" }}
                        injectedJavaScript={`document.getElementById('ORDER_ID').value = "${ORDER_ID}";
                  document.getElementById('TXN_AMOUNT').value = "${TXN_AMOUNT}";
                  document.getElementById('CUST_ID').value = "${CUST_ID}";document.f1.submit()`}
                        onNavigationStateChange={data => this.handleResponse(data.title)} />
                </Modal>
            </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        height: 30,
        width: 120
    },
    menuIcon: {
        color: 'white'
    },
    headBg: {
        backgroundColor: '#673ab7',
    },
    textColor: {
        color: 'white'
    },
    gievBtn: {
        backgroundColor: 'orange'
    },
    payBtn: {
        backgroundColor: '#673ab7'
    },
    cart: {
        flexDirection: 'row-reverse',
        padding: 5
    }
});

// const mapStateToProps = (state) => {
//     return state
// }

const mapStateToProps = (state) => ({
    gievs: state.gievs,
    cartItem: state.profile.userProfile.childCart
})

export default connect(mapStateToProps, { getGievs, addWishesToCart, getCartItems })(GievsItem);;
