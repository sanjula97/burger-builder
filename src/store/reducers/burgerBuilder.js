import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingrediants: null,
  totalPrice: 4,
  error: false,
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
    case actionTypes.SET_INGREDIANTS:
      return {
        ...state,
        ingrediants: {
          salad: action.ingrediants.salad,
          bacon: action.ingrediants.bacon,
          cheese: action.ingrediants.cheese,
          meat: action.ingrediants.meat,
        },
        error: false,
      };
    case actionTypes.FETCH_INGREDIANTS_FAILED:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
