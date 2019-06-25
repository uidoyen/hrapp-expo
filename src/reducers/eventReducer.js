import { GET_ALL_EVENTS, GET_EVENT_BY_ID, CREATE_EVENT, REGISTER_FOR_EVENT, GET_EVENT_REGISTERED_USERS } from "../actions/types";


const initialState = {
  events: [],
  event: {},
  registerEvent: {},
  eventRegisteredUsers: []
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return {
        ...state,
        events: action.payload
      }
    case GET_EVENT_BY_ID:
      return {
        ...state,
        event: action.payload
      }
    case CREATE_EVENT:
      return {
        ...state,
        events: action.payload
      }
    case REGISTER_FOR_EVENT:
      return {
        ...state,
        registerEvent: action.payload
      }
    case GET_EVENT_REGISTERED_USERS:
      return {
        ...state,
        eventRegisteredUsers: action.payload
      }
    default:
      return state
  }
}

export default eventReducer;