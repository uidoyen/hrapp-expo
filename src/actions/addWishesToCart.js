import axios from "axios";
import { AsyncStorage } from 'react-native'
import {
    ADD_WISHES_TO_CART_FAILURE,
    ADD_WISHES_TO_CART_SUCCESS
} from "./types";
import { API_GATEWAY } from "../utils/config";

export const addWishesToCart = (data) => dispatch => {
    AsyncStorage.getItem("jwtToken").then((value) => {
        axios.defaults.headers.common['Authorization'] = value
        axios
            .post(`${API_GATEWAY}/api/wishes/cart`, data)
            .then(res => {
                dispatch({
                    type: ADD_WISHES_TO_CART_SUCCESS,
                    payload: res.data
                });
            })
            .catch(() => {
                dispatch({
                    type: ADD_WISHES_TO_CART_FAILURE,
                    payload: []
                });
            });
    })
};