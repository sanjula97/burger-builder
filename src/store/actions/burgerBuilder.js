import * as actionTypes from "./actionTypes";

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
