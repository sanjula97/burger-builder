import * as actionTypes from "./actions";

const initialState = {
  ingrediants: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIANT:
      return {
        ...state,
        ingrediants: {
          ...state.ingrediants,
          [action.ingrientName]: state.ingrediants[action.ingrientName] + 1,
        },
      };
    case actionTypes.REMOVE_INGREDIANT:
      return {
        ...state,
        ingrediants: {
          ...state.ingrediants,
          [action.ingrientName]: state.ingrediants[action.ingrientName] - 1,
        },
      };
    default:
      return state;
  }
};

export default reducer;
