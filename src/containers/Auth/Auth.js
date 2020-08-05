import React, { Component } from "react";
import Input from "../../components/UI/Input/input.js";
import Button from "../../components/UI/Button/button";

class Auth extends Component {
  state = {
    controls: {
      username: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "username",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    return (
      <div>
        <form></form>
      </div>
    );
  }
}

export default Auth;
