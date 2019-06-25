import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SET_CURRENT_USER, SIGNOUT_REQUEST } from "../actions/types";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  isAuthenticatingError: null,
  user: {
    role: ''
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state, isAuthenticating: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticatingError: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      }
    case SIGNOUT_REQUEST:
      return {
        ...state = undefined,
        isAuthenticating: false,
        isAuthenticated: false
      }
    default:
      return state;
  }
}
export default authReducer;