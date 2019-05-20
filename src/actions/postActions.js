import axios from "axios";
import {
  ADD_POST, GET_ERRORS, GET_POSTS, UNAPPROVED_POSTS, APPROVE_POST,
  PRELOADER, DISAPPROVE_POST, LIKE_POST, UNLIKE_POST, GET_USER_POSTS,
  GET_USER_MEDIA, CREATE_COMMENTS, GET_POST_ID, GET_USER_POSTS_BY_ID, GET_USER_ALL_IMAGES_BY_ID
} from "./types";
import { API_GATEWAY } from "../utils/config";


export const addPost = (postData) => dispatch => {
  axios.post(`${API_GATEWAY}/api/posts`, postData)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    }).catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const getPosts = () => dispatch => {
  axios.get(`${API_GATEWAY}/api/posts`)
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    }).catch(() => {
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    })
}

export const getUnApprovedPosts = () => dispatch => {
  axios.get(`${API_GATEWAY}/api/posts/unapproved`)
    .then(res => {
      dispatch({
        type: UNAPPROVED_POSTS,
        payload: res.data
      })
    }).catch(() => {
      dispatch({
        type: UNAPPROVED_POSTS,
        payload: null
      })
    })
}

export const approvePosts = (postId) => dispatch => {
  axios.put(`${API_GATEWAY}/api/posts/conversion/${postId}`)
    .then(res => {
      dispatch({
        type: APPROVE_POST,
        payload: res.data
      })
    }).catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const disapprovePost = (postId) => dispatch => {
  axios.delete(`${API_GATEWAY}/api/posts/disapprove/${postId}`)
    .then(res => {
      dispatch({
        type: DISAPPROVE_POST,
        payload: res.data
      })
    }).catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const likePost = (postId) => dispatch => {
  axios.post(`${API_GATEWAY}/api/posts/like/${postId}`)
    .then(res => {
      dispatch({
        type: LIKE_POST,
        payload: res.data
      })
    }).catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}
export const unlikePost = (postId) => dispatch => {
  axios.post(`${API_GATEWAY}/api/posts/unlike/${postId}`)
    .then(res => {
      dispatch({
        type: UNLIKE_POST,
        payload: res.data
      })
    }).catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}
export const addComments = (formdata, commentsId, navigate) => dispatch => {
  axios.post(`${API_GATEWAY}/api/posts/comment/${commentsId}`, formdata)
    .then(res => {
      dispatch({
        type: CREATE_COMMENTS,
        payload: res.data
      })
    }).catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

export const getUserPosts = () => dispatch => {
  axios.get(`${API_GATEWAY}/api/posts/currentuserpost`)
    .then(res => {
      dispatch({
        type: GET_USER_POSTS,
        payload: res.data
      })
    }).catch(() => {
      dispatch({
        type: GET_USER_POSTS,
        payload: null
      })
    })
}

export const getUserMedia = () => dispatch => {
  axios.get(`${API_GATEWAY}/api/posts/media`)
    .then(res => {
      dispatch({
        type: GET_USER_MEDIA,
        payload: res.data
      })
    }).catch(() => {
      dispatch({
        type: GET_USER_MEDIA,
        payload: null
      })
    })
}


export const getPostId = (postId) => dispatch => {
  axios.get(`${API_GATEWAY}/api/posts/${postId}`)
    .then(res => {
      dispatch({
        type: GET_POST_ID,
        payload: res.data
      })
      // history.push(`/post/${postId}`)
    }).catch(() => {
      dispatch({
        type: GET_POST_ID,
        payload: null
      })
    })
}

//get all posts of that perticular user by his/her ID
export const getAllUserPostsById = (postsById) => dispatch => {
  axios.get(`${API_GATEWAY}/api/posts/all/${postsById}`)
    .then(res => {
      dispatch({
        type: GET_USER_POSTS_BY_ID,
        payload: res.data
      })
    }).catch(() => {
      dispatch({
        type: GET_USER_POSTS_BY_ID,
        payload: null
      })
    })
}


//get all IMAGES of that perticular user by his/her ID
export const getAllUserImagesById = (imagesById) => dispatch => {
  axios.get(`${API_GATEWAY}/api/posts/allimages/${imagesById}`)
    .then(res => {
      dispatch({
        type: GET_USER_ALL_IMAGES_BY_ID,
        payload: res.data
      })
    }).catch(() => {
      dispatch({
        type: GET_USER_ALL_IMAGES_BY_ID,
        payload: null
      })
    })
}