import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorRducer from './errorReducer';
import postReducer from './postReducer';
import eventReducer from './eventReducer';
import currentPostsReducer from './currentPostsReducer';
import profileReducer from './profileReducer';
import askLeaderReducer from './askLeaderReducer';
import communityReducer from './communityReducer'
import gievReducer from './gievReducer';
import myConnectionsReducer from './myConnectionsReducer';
import badgeReducer from'./badgeReducer';
import {getPostReducer} from './post/getPostReducer'
import {addPostReducer} from './post/addPostReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorRducer,
  // post: postReducer,
  event: eventReducer,
  profile: profileReducer,
  currentPosts: currentPostsReducer,
  askLeader: askLeaderReducer,
  communityGroup: communityReducer,
  giev: gievReducer,
  myConnections: myConnectionsReducer,
  badges: badgeReducer,
  getPostReducer,
  addPostReducer,

})

export default rootReducer;