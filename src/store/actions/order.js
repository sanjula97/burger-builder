import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSucess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purchaseBurgerStart = (orderData) => {
  return (dispatch) => {
    axios
      .post("/orders.json", orderData)
      .then((response) => {
        dispatch(purchaseBurgerSucess(response.data, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};