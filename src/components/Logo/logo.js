import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png'
import classes from './logo.module.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="Burger LOgo"/>
    </div>
);

export default logo