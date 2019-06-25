import {
  GET_POSTS,
  GET_POSTS_ERROR
} from "../actions/types";

const initialState = {
  posts: [],
  fetchedPost: false
}

const getPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case GET_POSTS_ERROR:
      return {
        ...state,
        posts: []
      }
    default:
      return state
  }
}

export default getPostsReducer;

