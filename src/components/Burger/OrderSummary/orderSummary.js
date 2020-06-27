import React, { Component } from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/button'

class OrderSummary extends Component{

    componentDidUpdate(){
        console.log('[OrderSummary] willupdate')
    }

    render() {
        const ingrediantSummary = Object.keys(this.props.ingrediants)
        .map(igKey => {
            return (<li key={igKey}>
                        <span style={{textTransform:'capitalize'}}>{igKey}</span>:{this.props.ingrediants[igKey]}
                    </li>);
        });
        return(
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with following ingrediants:</p>
                <ul>
                    {ingrediantSummary}
                </ul>
                <p><strong>Total price:{this.props.price}$</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }
}

export default OrderSummary;