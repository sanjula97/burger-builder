import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/burger'
import BuildControls from '../../components/Burger/BuildControls/buildControls'

const INGREDIANT_PRICES = {
    salad:0.5,
    bacon:0.7,
    cheese:0.4,
    meat:1.3
}

class BurgerBuilder extends Component {

    state = {
        ingrediants:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4
    }

    addIngrediantsHandler = (type) => {
        const oldCount = this.state.ingrediants[type];
        const updatedCount = oldCount + 1;
        const updatedIngrediants = {
            ...this.state.ingrediants
        } 
        updatedIngrediants[type] = updatedCount

        const priceAddition = INGREDIANT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition

        this.setState({totalPrice:newPrice,ingrediants:updatedIngrediants})
    }

    removeIngrediantHandler = (type) => {
        const oldCount = this.state.ingrediants[type];
        let updatedCount = oldCount - 1 
        const updatedIngrediants = {
            ...this.state.ingrediants
        } 
        updatedIngrediants[type] = updatedCount

        const priceReduction = INGREDIANT_PRICES[type]
        const oldPrice = this.state.totalPrice
        let newPrice = oldPrice - priceReduction

        this.setState({totalPrice:newPrice,ingrediants:updatedIngrediants})

    }
    

    render(){

        const disabledInfo = {
            ...this.state.ingrediants
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return(
            <Aux>
                <Burger ingrediants={this.state.ingrediants}/>
                <BuildControls 
                    ingrediantAdded={this.addIngrediantsHandler} 
                    ingrediantRemoved={this.removeIngrediantHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;