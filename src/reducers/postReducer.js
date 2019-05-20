import {
  ADD_POST, GET_POSTS, UNAPPROVED_POSTS, APPROVE_POST, PRELOADER,
  DISAPPROVE_POST, LIKE_POST, UNLIKE_POST, GET_USER_POSTS, GET_USER_MEDIA,
  CREATE_COMMENTS, GET_POST_ID, GET_USER_POSTS_BY_ID, GET_USER_ALL_IMAGES_BY_ID

} from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  unapproved: [],
  loading: false,
  userPosts: [],
  userMedia: [],
  comments: [],
  UserPostsByID: [],
  UserImagesById: []
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        // posts: [action.payload, ...state.posts]
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case UNAPPROVED_POSTS:
      return {
        ...state,
        unapproved: action.payload
      }
    case PRELOADER:
      return {
        ...state,
        loading: true
      }
    case APPROVE_POST:
      return {
        ...state,
        unapproved: [action.payload]
      }
    case DISAPPROVE_POST:
      return {
        ...state
      }
    case LIKE_POST:
      return {
        ...state,
        post: action.payload
      }
    case UNLIKE_POST:
      return {
        ...state,
        post: action.payload
      }
    case CREATE_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    case GET_POST_ID:
      return {
        ...state,
        post: action.payload
      }
    case GET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload
      }
    case GET_USER_MEDIA:
      return {
        ...state,
        userMedia: action.payload
      }
    case GET_USER_POSTS_BY_ID:
      return {
        ...state,
        UserPostsByID: action.payload
      }
    case GET_USER_ALL_IMAGES_BY_ID:
      return {
        ...state,
        UserImagesById: action.payload
      }
    default:
      return state
  }
}

export default postReducer;

