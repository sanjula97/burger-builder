import React from 'react';

import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/navigatinItems'
import classes from './sideDrawer'

const sideDrawer = (props) => {
    //...
    return(
        <div className={classes.sideDrawer}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default sideDrawer