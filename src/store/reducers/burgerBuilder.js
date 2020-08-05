import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

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
      const updatedIngrediant = {
        [action.ingrientName]: state.ingrediants[action.ingrientName] + 1,
      };
      const updatedIngrediants = updateObject(
        state.ingrediants,
        updatedIngrediant
      );
      const updatedState = {
        ingrediants: updatedIngrediants,
        totalPrice: state.totalPrice + INGREDIANT_PRICES[action.ingrientName],
      };
      return updateObject(state, updatedState);
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
      return updateObject(state, {
        ingrediants: {
          salad: action.ingrediants.salad,
          bacon: action.ingrediants.bacon,
          cheese: action.ingrediants.cheese,
          meat: action.ingrediants.meat,
        },
        totalPrice: 4,
        error: false,
      });
    case actionTypes.FETCH_INGREDIANTS_FAILED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;
