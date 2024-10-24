import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes";

const initialState = [];
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      return state.filter((cartItem) => cartItem.id !== action.payload);
    default:
      return state;
  }
};
