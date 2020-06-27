import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import classes from './layout.module.css'
import ToolBar from '../Navigation/Toolbar/toolBar'
import SideDrawer from '../Navigation/SideDrawer/sideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer : false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }
    menuClickHandler = () => {
        this.setState({showSideDrawer:true});
    }
    
    render(){
        return(
            <Aux>
                <ToolBar menuClicked={this.menuClickHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
}

export default Layout;