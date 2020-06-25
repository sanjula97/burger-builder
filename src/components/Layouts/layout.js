import React from 'react';
import Aux from '../../hoc/Aux'
import classes from './layout.module.css'
import ToolBar from '../Navigation/Toolbar/toolBar'

const layout = (props) => (
    <Aux>
        <ToolBar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;