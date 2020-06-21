import React from 'react'
import classes from './burger.module.css'
import BurgerIngrediant from './BurgerIngrediant/burgerIngrediant'

const burger = (props) => {
    return(
        <div className={classes.Burger}>
            <BurgerIngrediant type="bread-top"/>
            <BurgerIngrediant type="cheese"/>
            <BurgerIngrediant type="meat"/>
            <BurgerIngrediant type="bread-bottom"/>
        </div>
    );
};

export default burger