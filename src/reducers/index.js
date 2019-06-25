import { combineReducers } from "redux";
import { SIGNOUT_REQUEST } from "../actions/types";
import authReducer from './authReducer';
import getPostsReducer from './getPostsReducer'
import getGievReducer from "./getGievReducer";
import { addWishesToCartReducer } from "./addWishesToCartReducer";
import { getCartItemsReducer } from './getCartItemsReducer';
import profileReducer from "./getAllProfileReducer";
import eventReducer from "./eventReducer";
import deletePostReducer from "./deletePostReducer";

const appReducer = combineReducers({
  auth: authReducer,
  posts: getPostsReducer,
  gievs: getGievReducer,
  addToCart: addWishesToCartReducer,
  getCartItems: getCartItemsReducer,
  profile: profileReducer,
  events: eventReducer,
  deletePost: deletePostReducer
});

const rootReducer = (state, action) => {
  if (action.type === SIGNOUT_REQUEST) {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;