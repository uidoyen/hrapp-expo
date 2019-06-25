import axios from "axios";
import { AsyncStorage } from 'react-native'
import {
  GET_POSTS,
  GET_POSTS_ERROR
} from "./types";
import { API_GATEWAY } from "../utils/config";

export const getPosts = () => dispatch => {
  AsyncStorage.getItem("jwtToken").then((value) => {
    axios.defaults.headers.common['Authorization'] = value
    axios
      .get(`${API_GATEWAY}/api/posts`)
      .then(res => {
        dispatch({
          type: GET_POSTS,
          payload: res.data
        });
      })
      .catch(() => {
        dispatch({
          type: GET_POSTS_ERROR,
          payload: []
        });
      });
  })
};
