import {
  GET_ALL_GIEV,
  GET_ALL_GIEV_SUCCESS,
  GET_ALL_GIEV_FAILURE
} from "../actions/types";

const initialState = {
  gievs: []
}

const getGievReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GIEV_SUCCESS:
      return {
        ...state,
        gievs: action.payload
      }
    case GET_ALL_GIEV_FAILURE:
      return {
        ...state,
        gievs: []
      }
    default:
      return state
  }
}

export default getGievReducer;

