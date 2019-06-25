import axios from "axios";
import { AsyncStorage } from 'react-native'
import {
    GET_CARTITEM_SUCCESS,
    GET_CARTITEM_FAILURE
} from "./types";
import { API_GATEWAY } from "../utils/config";

export const getCartItems = () => dispatch => {
    AsyncStorage.getItem("jwtToken").then((value) => {
        axios.defaults.headers.common['Authorization'] = value
        axios
            .get(`${API_GATEWAY}/api/wishes/currentUser`)
            .then(res => {
                //console.log(res)
                dispatch({
                    type: GET_CARTITEM_SUCCESS,
                    payload: res.data
                });
            })
            .catch(() => {
                dispatch({
                    type: GET_CARTITEM_FAILURE,
                    payload: []
                });
            });
    })
};