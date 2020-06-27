import React from 'react';
import classes from './toolBar.module.css'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/navigatinItems'

const toolBar = (props) => (
    <header className={classes.ToolBar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>

        </nav>
    </header>
);

export default toolBar