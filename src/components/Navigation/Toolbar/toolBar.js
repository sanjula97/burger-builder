import React from 'react';
import classes from './toolBar.module.css'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/navigatinItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/drawerToggle'

const toolBar = (props) => (
    <header className={classes.ToolBar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>

        </nav>
    </header>
);

export default toolBar