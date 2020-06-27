import React from 'react';

import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/navigatinItems'
import classes from './sideDrawer.module.css'

const sideDrawer = (props) => {
    //...
    return(
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div> 
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default sideDrawer