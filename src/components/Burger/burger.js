import React from 'react'
import classes from './burger.module.css'
import BurgerIngrediant from './BurgerIngrediant/burgerIngrediant'

const burger = (props) => {

    const transformedIngrediants = Object.keys(props.ingrediants)
    .map(igKey =>{
        return [...Array(props.ingrediants[igKey])].map((_,i) => {
            return <BurgerIngrediant key={igKey + i} type={igKey} />
        });
    });
    
    return(
        <div className={classes.Burger}>
            <BurgerIngrediant type="bread-top"/>
            {transformedIngrediants}
            <BurgerIngrediant type="bread-bottom"/>
        </div>
    );
};

export default burger