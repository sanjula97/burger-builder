import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/burger'
import BuildControls from '../../components/Burger/BuildControls/buildControls'

class BurgerBuilder extends Component {

    state = {
        ingrediants:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingrediants={this.state.ingrediants}/>
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;