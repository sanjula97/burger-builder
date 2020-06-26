import React from 'react';
import classes from './toolBar.module.css'
import Logo from '../../Logo/logo'

const toolBar = (props) => (
    <header className={classes.ToolBar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...

        </nav>
    </header>
);

export default toolBar