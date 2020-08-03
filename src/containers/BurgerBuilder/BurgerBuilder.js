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
import * as burgerBuilderActions from "../../store/actions/index";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngrediants();
  }

  updateurchaseState(ingrediants) {
    const sum = Object.keys(ingrediants)
      .map((igKey) => {
        return ingrediants[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return sum > 0;
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // alert('You Continue!!')
    this.props.history.push("/checkout");
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

    let burger = this.props.error ? (
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
            purchasable={this.updateurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
            price={this.props.price}
          />
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          ingrediants={this.props.ings}
          purchaseCancelled={this.purchaseCancelHandler}
          price={this.props.price}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
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
    price: state.totalPrice,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngrediantAdded: (ingName) =>
      dispatch(burgerBuilderActions.addIngrediant(ingName)),
    onIngrediantRemoved: (ingName) =>
      dispatch(burgerBuilderActions.removeIngrediant(ingName)),
    onInitIngrediants: () => dispatch(burgerBuilderActions.initIngrediants()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
