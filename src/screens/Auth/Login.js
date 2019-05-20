import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { StyleSheet, View, Text, Image, AsyncStorage, KeyboardAvoidingView } from "react-native";
import { Button, Item, Input, Label } from "native-base";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser, logoutUser } from '../../actions/authAction';

export class Login extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    email: '',
    password: ''
  };
  componentDidMount = () => {
    //this.props.logoutUser()
  }
  updateInputState = (key, value) => {
    this.setState(prevState => {
      return {
        ...prevState,
        [key]: value
      }
    })
  }

  handleFormSubmit = () => {
    this.props.loginUser({ email: "rsr.mukkara45@gmail.com", password: "Ranga@45" });
  };

  render() {
    const {
      values,
      handleBlur,
      errors,
      handleChange,
      handleSubmit,
      auth
    } = this.props;
    console.log(this.props)
    if(auth.isAuthenticated === true && auth.isAuthenticating === false){
      this.props.navigation.navigate("Home")
    }
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled
        style={{
          flex: 1,
          backgroundColor: "#673AB7",
          justifyContent: "center",
          padding: 20
        }}
      >
        <View style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../../../assets/edgeverve-logo.png')}
            />
          </View>
          <Item
            //floatingLabel 
            error={errors.email ? true : false}
          >
            <Label style={{ color: '#b997f7' }}>Email</Label>
            <Input
              name="email"
              type="email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
          </Item>
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <Item
            //floatingLabel
            style={{ marginTop: 20 }}
          >
            <Label style={{ color: '#b997f7' }}>Password</Label>
            <Input
              name="password"
              type="password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
          </Item>
          {errors.password && <Text style={styles.error}>{errors.password}</Text>}
          <Button
            block
            style={{
              marginVertical: 20,
              backgroundColor: 'white'
            }}
            onPress={handleSubmit}
          >
            <Text
              style={{
                color: "#673AB7",
                fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 18
              }}
            >
              SIGN IN
          </Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Please enter a valid email address')
      .required('Please enter email address'),
    password: Yup.string().required('Please enter password')
  }),
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  handleSubmit: (payload, { props }) => {
    props.loginUser(payload)
  },
  displayName: 'Login',
})(Login);

const mapStateToProps = state => {
  return state
}
// const mapStateToProps = state => ({
//   auth: state.authReducer
// })
const LoginForm = connect(mapStateToProps, { loginUser, logoutUser })(formikEnhancer)
export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  error: {
    color: 'red',
    fontSize: 11
  }
})