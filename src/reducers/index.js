import { combineReducers } from "redux";
import { SIGNOUT_REQUEST } from "../actions/types";
import authReducer from './authReducer';
const appReducer =  combineReducers({
  auth: authReducer
});
const rootReducer = (state, action) => {
  if (action.type === SIGNOUT_REQUEST) {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;