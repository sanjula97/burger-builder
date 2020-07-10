import React from 'react';
import {Switch,Route} from 'react-router-dom'

import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../../containers/checkout/checkout'
import Orders from '../../containers/Orders/orders'

const MainRouts = () => (
    <Switch>
        <Route exact path="/" component={BurgerBuilder}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/orders" component={Orders}/>
    </Switch>
);

export default MainRouts