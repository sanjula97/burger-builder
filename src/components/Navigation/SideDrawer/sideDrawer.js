import React from 'react';

import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/navigatinItems'
import classes from './sideDrawer.module.css'
import BackDrop from '../../UI/BackDrop/backDrop'
import Aux from '../../../hoc/Aux'

const sideDrawer = (props) => {
    
    let attachClasses = [classes.SideDrawer,classes.Close]

    if(props.open){
        attachClasses = [classes.SideDrawer,classes.Open]
    }

    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div> 
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer