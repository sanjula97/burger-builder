import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/burger";
import BuildControls from "../../components/Burger/BuildControls/buildControls";
import Modal from "../../components/UI/Modal/modal";
import OrderSummary from "../../components/Burger/OrderSummary/orderSummary";
import Spinner from "../../components/UI/Spinner/spinner";
import withErrorHandler from "../../hoc/WithErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import * as actionTypes from "../../store/actions";

const INGREDIANT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  state = {
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    // axios
    //   .get("https://my-burger-3627c.firebaseio.com/ingrediants.json")
    //   .then((response) => {
    //     this.setState({ ingrediants: response.data });
    //   })
    //   .catch((error) => {
    //     this.setState({ error: true });
    //   });
  }

  updateurchaseState(ingrediants) {
    const sum = Object.keys(ingrediants)
      .map((igKey) => {
        return ingrediants[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({ purchasable: sum > 0 });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // alert('You Continue!!')

    const queryParams = [];

    for (let i in this.state.ingrediants) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingrediants[i])
      );
    }

    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  addIngrediantsHandler = (type) => {
    const oldCount = this.state.ingrediants[type];
    const updatedCount = oldCount + 1;
    const updatedIngrediants = {
      ...this.state.ingrediants,
    };
    updatedIngrediants[type] = updatedCount;

    const priceAddition = INGREDIANT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingrediants: updatedIngrediants });

    this.updateurchaseState(updatedIngrediants);
  };

  removeIngrediantHandler = (type) => {
    const oldCount = this.state.ingrediants[type];
    let updatedCount = oldCount - 1;
    const updatedIngrediants = {
      ...this.state.ingrediants,
    };
    updatedIngrediants[type] = updatedCount;

    const priceReduction = INGREDIANT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    let newPrice = oldPrice - priceReduction;

    this.setState({ totalPrice: newPrice, ingrediants: updatedIngrediants });

    this.updateurchaseState(updatedIngrediants);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  render() {
    const disabledInfo = {
      ...this.props.ings,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? (
      <p>Ingrediants cant be loaded!</p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingrediants={this.props.ings} />
          <BuildControls
            ingrediantAdded={this.props.onIngrediantAdded}
            ingrediantRemoved={this.props.onIngrediantRemoved}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}
          />
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          ingrediants={this.props.ings}
          purchaseCancelled={this.purchaseCancelHandler}
          price={this.state.totalPrice.toFixed(2)}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingrediants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngrediantAdded: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIANT, ingrientName: ingName }),
    onIngrediantRemoved: (ingName) =>
      dispatch({ type: actionTypes.REMOVE_INGREDIANT, ingrientName: ingName }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
