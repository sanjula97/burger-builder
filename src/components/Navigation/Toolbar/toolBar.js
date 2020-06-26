import React from 'react';
import classes from './toolBar.module.css'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/navigatinItems'

const toolBar = (props) => (
    <header className={classes.ToolBar}>
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems/>

        </nav>
    </header>
);

export default toolBar