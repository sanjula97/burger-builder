import React from 'react';

import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/navigatinItems'
import classes from './sideDrawer.module.css'

const sideDrawer = (props) => {
    //...
    return(
        <div className={classes.SideDrawer}>
            <Logo height="11%"/>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default sideDrawer