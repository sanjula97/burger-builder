import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/burger'

class BurgerBuilder extends Component {
    render(){
        return(
            <Aux>
                <Burger />
                <div>Burger Builder</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;