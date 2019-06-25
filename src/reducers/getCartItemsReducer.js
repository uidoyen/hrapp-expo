import {
    GET_CARTITEM_SUCCESS,
    GET_CARTITEM_FAILURE
} from '../actions/types';

const initialState = {
    cartItem: [],
    cartItemError: null
};

export const getCartItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARTITEM_SUCCESS:
            return {
                ...state,
                cartItem: action.payload
            };
        case GET_CARTITEM_FAILURE:
            return {
                ...state,
                cartItemError: action.payload
            };
        default:
            return state;
    }
};