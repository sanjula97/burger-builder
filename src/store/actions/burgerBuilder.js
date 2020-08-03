import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngrediant = (name) => {
  return {
    type: actionTypes.ADD_INGREDIANT,
    ingrientName: name,
  };
};

export const removeIngrediant = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIANT,
    ingrientName: name,
  };
};

export const setIngrediants = (ingrediants) => {
  return {
    type: actionTypes.SET_INGREDIANTS,
    ingrediants: ingrediants,
  };
};

export const fetchIngrediantsFalied = () => {
  return {
    type: actionTypes.FETCH_INGREDIANTS_FAILED,
  };
};

export const initIngrediants = () => {
  return (dispatch) => {
    axios
      .get("https://my-burger-3627c.firebaseio.com/ingrediants.json")
      .then((response) => {
        dispatch(setIngrediants(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngrediantsFalied());
      });
  };
};
