import axios from "axios";
import { CREATE_EVENT, GET_ALL_EVENTS, GET_ERRORS, GET_EVENT_BY_ID, REGISTER_FOR_EVENT, GET_EVENT_REGISTERED_USERS } from "./types";
import { API_GATEWAY } from "../utils/config";

export const getEvents = () => dispatch => {
  axios.get(`${API_GATEWAY}/api/events`)
    .then(res => {
      dispatch({
        type: GET_ALL_EVENTS,
        payload: res.data.events
      })
    }).catch(() => {
      dispatch({
        type: GET_ALL_EVENTS,
        payload: null
      })
    })
}

export const getEventById = (id) => dispatch => {
  axios.get(`${API_GATEWAY}/api/events/${id}`)
    .then(res => {
      dispatch({
        type: GET_EVENT_BY_ID,
        payload: res.data
      })
    }).catch(() => {
      dispatch({
        type: GET_ALL_EVENTS,
        payload: null
      })
    })
}



export const createEvent = (data, navigate) => dispatch => {
  axios.post(`${API_GATEWAY}/api/events`, data)
    .then(res => {
      navigate.push('/events')
      dispatch({
        type: CREATE_EVENT,
        payload: res.data
      })
    }).catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const registerUserForEvent = (data) => dispatch => {
  axios.post(`${API_GATEWAY}/api/events/registeredusers`, data)
    .then(res => {
      dispatch({
        type: REGISTER_FOR_EVENT,
        payload: res.data
      })
    }).catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const getEventRegisteredUsers = (eventId) => dispatch => {
  axios.get(`${API_GATEWAY}/api/events/registeredusers/${eventId}`)
    .then(res => {
      dispatch({
        type: GET_EVENT_REGISTERED_USERS,
        payload: res.data
      })
    }).catch(err => {
      dispatch({
        type: GET_EVENT_REGISTERED_USERS,
        payload: null
      })
    })
} 