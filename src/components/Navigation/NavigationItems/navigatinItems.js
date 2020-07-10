import React from 'react';
import classes from './navigationItems.module.css'
import NavigationItem from './NavigationItem/navigationItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact>Burger Builder</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
    </ul>
);

export default navigationItems;