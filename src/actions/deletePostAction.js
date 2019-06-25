import axios from "axios";
import { API_GATEWAY } from "../utils/config";
import { DELETE_POST_START, DELETE_POST_FAILURE, DELETE_POST_SUCCESS } from "./types";
// import toast from 'react-toastify';

export const deletePostAction = (data) => {
  return dispatch => {
    dispatch({ type: DELETE_POST_START })
    return axios.delete(`${API_GATEWAY}/api/posts/deletePost/${data}`)
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: DELETE_POST_SUCCESS, payload: res.data })
        } else {
          dispatch({ type: DELETE_POST_FAILURE, payload: res })
        }
      })
      .catch(err => {
        dispatch({ type: DELETE_POST_FAILURE, payload: err })
      })
  }
}