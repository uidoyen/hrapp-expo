import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SET_CURRENT_USER, GET_ERRORS, SIGNOUT_REQUEST } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from 'jwt-decode';
import { API_GATEWAY } from "../utils/config";
import { AsyncStorage } from "react-native";

//User Registration action
export const registerUser = (userData, navigate) => dispatch => {
  axios.post(`${API_GATEWAY}/api/users/register`, userData)
    .then(res => navigate.push('/login'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}

//Login action

export const loginUser = (data) => {
  return dispatch => {
    dispatch({type: LOGIN_REQUEST})
    return axios.post(`${API_GATEWAY}/api/users/login`, data)
    .then(res => {
      console.log(JSON.stringify(res))
      if(res.status === 200){
        const { token } = res.data;
        AsyncStorage.setItem("jwtToken", token)
        setAuthToken(token);
        const decodedToken = jwt_decode(token);
        dispatch(setCurrentUser(decodedToken));
        dispatch({type: LOGIN_SUCCESS, payload: res.data})
      }else{
        dispatch({type: LOGIN_FAILURE, payload: res.message})
      }
    })
    .catch(err => {
      dispatch({type: LOGIN_FAILURE, payload: err})
    })
  }
}

// export const loginUser = (userData) => {
//   dispatch => {
//     dispatch({type: LOGIN_REQUEST})
//     axios.post(`${API_GATEWAY}/api/users/login`, userData)
//     .then(res => {
//       console.log(res)
//       const { token } = res.data;
//       AsyncStorage.setItem("jwtToken", token)
//       setAuthToken(token);
      
//       const decodedToken = jwt_decode(token);
//       dispatch(setCurrentUser(decodedToken));
//     })
//     .catch(err => dispatch({
//       type: GET_ERRORS,
//       payload: err.response.data
//     }))
//   }
// }

export const setCurrentUser = (decodedToken) => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedToken
  }
}

//Logout user
export const logoutUser = () => {
    return {
      type: SIGNOUT_REQUEST
    }
  // localStorage.removeItem('jwtToken');
  // setAuthToken(false);
  // dispatch(setCurrentUser({}));
}