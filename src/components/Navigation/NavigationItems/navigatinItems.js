import React from 'react';
import classes from './navigationItems.module.css'
import NavigationItem from './NavigationItem/navigationItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active={true}>Burger Builder</NavigationItem>
        <NavigationItem link='/checkout'>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;