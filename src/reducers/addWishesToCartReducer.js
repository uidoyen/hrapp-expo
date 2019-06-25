import {
    ADD_WISHES_TO_CART_SUCCESS,
    ADD_WISHES_TO_CART_FAILURE
} from '../actions/types';

const initialState = {
    addingKidWishesToCart: false,
    addedKidWishesToCart: false,
    addingKidWishesToCartError: null,
    addKidWishesToCartData: []
};

export const addWishesToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WISHES_TO_CART_FAILURE:
            return {
                ...state,
                addingKidWishesToCart: false,
                addingKidWishesToCartError: action.payload
            };
        case ADD_WISHES_TO_CART_SUCCESS:
            return {
                ...state,
                addingKidWishesToCart: false,
                addedKidWishesToCart: true,
                addKidWishesToCartData: action.payload
            };
        default:
            return state;
    }
};
