import axios from "axios";
import { AsyncStorage } from 'react-native'
import {
    GET_ALL_GIEV,
    GET_ALL_GIEV_SUCCESS,
    GET_ALL_GIEV_FAILURE
} from "./types";
import { API_GATEWAY } from "../utils/config";


export const getGievs = () => dispatch => {
    AsyncStorage.getItem("jwtToken").then((value) => {
        axios.defaults.headers.common['Authorization'] = value
        axios
            .get(`${API_GATEWAY}/api/wishes`)
            .then(res => {
                dispatch({
                    type: GET_ALL_GIEV_SUCCESS,
                    payload: res.data
                });
            })
            .catch(() => {
                dispatch({
                    type: GET_ALL_GIEV_FAILURE,
                    payload: []
                });
            });
    })
};
