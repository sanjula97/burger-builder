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

const addIngrediant = (state, action) => {
  const updatedIngrediant = {
    [action.ingrientName]: state.ingrediants[action.ingrientName] + 1,
  };
  const updatedIngrediants = updateObject(state.ingrediants, updatedIngrediant);
  const updatedState = {
    ingrediants: updatedIngrediants,
    totalPrice: state.totalPrice + INGREDIANT_PRICES[action.ingrientName],
  };
  return updateObject(state, updatedState);
};

const removeIngrediant = (state, action) => {
  return {
    ...state,
    ingrediants: {
      ...state.ingrediants,
      [action.ingrientName]: state.ingrediants[action.ingrientName] - 1,
    },
    totalPrice: state.totalPrice - INGREDIANT_PRICES[action.ingrientName],
  };
};

const setIngrediants = (state, action) => {
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
};

const fetchIngrediantsFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIANT:
      return addIngrediant(state, action);
    case actionTypes.REMOVE_INGREDIANT:
      return removeIngrediant(state, action);
    case actionTypes.SET_INGREDIANTS:
      return setIngrediants(state, action);
    case actionTypes.FETCH_INGREDIANTS_FAILED:
      return fetchIngrediantsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
