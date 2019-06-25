import { DELETE_POST_START, DELETE_POST_FAILURE, DELETE_POST_SUCCESS } from "../actions/types";

const initialState = {
  deletingPost: false,
  deletedPost: false,
  deletingPostError: null,
  deletePostData: []
}

const deletePostReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case DELETE_POST_START:
      return {
        ...state,
        deletingPost: true
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        deletingPost: false,
        deletingPostError: action.payload
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        deletingPost: false,
        deletedPost: true,
        deletePostData: action.payload
      };
    default:
      return state;
  }
}
export default deletePostReducer;