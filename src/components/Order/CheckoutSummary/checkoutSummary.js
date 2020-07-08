import React from 'react';

import Burger from './../../Burger/burger';
import Button from '../../UI/Button/button';
import classes from './checkouSummary.module.css'

const CheckoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope it taste well!!</h1>
            <div style={{width:'100%' , margin:'auto'}}>
                <Burger ingrediants={props.ingrediants}/>

                <Button 
                    btnType="Danger"
                    licked>CANCEL</Button>
                <Button 
                    btnType="Success"
                    clicked>CONTINUE</Button>
            </div>
        </div>
    );
}

export default CheckoutSummary;