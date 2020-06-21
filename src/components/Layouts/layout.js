import React from 'react';
import Aux from '../../hoc/Aux'
import classes from './layout.module.css'

const layout = (props) => (
    <Aux>
        <div>TOOLBAR,SideDrawer,BackDrop</div>
        <main className={classes.mmm}>
            {props.children}
        </main>
    </Aux>
);

export default layout;