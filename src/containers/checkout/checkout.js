import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/checkoutSummary';
import ContactData from './contactData/contactData'

class Checkout extends Component{

    state={
        ingrediants:null,
        totalPrice : 0
    }

    componentWillMount(){
        const query = new URLSearchParams(
            this.props.location.search
        );

        let ingrediants = {};
        let price = 0;

        for(let param of query.entries()){
            //['salad' : '1' ]
            if(param[0] === 'price'){
                price = param[1];
            }else{
                ingrediants[param[0]] = +param[1];
            }
        }
        this.setState({ingrediants:ingrediants});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        return(
            <div>
                <CheckoutSummary 
                    ingrediants={this.state.ingrediants}
                    onCheckoutCancelled={this.checkoutCancelledHandler}
                    onCheckoutContinued={this.checkoutContinuedHandler} />
                <Route 
                    path={this.props.match.path + '/contact-Data'} 
                    render={() => (<ContactData 
                                        ingrediants={this.state.ingrediants}
                                        price={this.state.totalPrice} />)}
                                         />
            </div>
        );  
    }
}

export default Checkout;