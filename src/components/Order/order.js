import React from 'react';

import classes from './order.module.css'

const orders = (props) => (
    <div className={classes.Order}>
        <p>Ingrediants: Salad(1)</p>
        <p>Price:<strong>USD 5.45</strong></p>
    </div>
);

export default orders;