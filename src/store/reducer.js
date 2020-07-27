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

const INGREDIANT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
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
        totalPrice: state.totalPrice + INGREDIANT_PRICES[action.ingrientName],
      };
    case actionTypes.REMOVE_INGREDIANT:
      return {
        ...state,
        ingrediants: {
          ...state.ingrediants,
          [action.ingrientName]: state.ingrediants[action.ingrientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIANT_PRICES[action.ingrientName],
      };
    default:
      return state;
  }
};

export default reducer;
