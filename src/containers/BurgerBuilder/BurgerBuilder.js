import React,{Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/burger'
import BuildControls from '../../components/Burger/BuildControls/buildControls'
import Modal from '../../components/UI/Modal/modal'
import OrderSummary from '../../components/Burger/OrderSummary/orderSummary'
import Spinner from '../../components/UI/Spinner/spinner'
import withErrorHandler from '../../hoc/WithErrorHandler/withErrorHandler'
import axios from '../../axios-orders'

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
        totalPrice:4,
        purchasable:false,
        purchasing:false,
        loading:false
    }

    updateurchaseState(ingrediants){

        const sum = Object.keys(ingrediants)
            .map(igKey => {
                return ingrediants[igKey];
            })
            .reduce((sum,el)=>{
                return sum+el
            },0);
        
            this.setState({purchasable:sum>0});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () => {
        // alert('You Continue!!')
        this.setState({loading:true});
        const order = {
            ingrediants: this.state.ingrediants,
            price:this.state.totlaPrice,
            customer: {
                name:'Sanjula karunarathna',
                address:'Kurunegala',
                zipcode:'6969',
                country:'Germony'
            },
            email:'sanjula@test.com',
            delivaryMethod:'fastest'
        }
        axios.post('/orders.json',order)
        .then(response => {
            this.setState({loading:false , purchasing:false});
        })
        .catch(error => {
            this.setState({loading:false , purchasing:false})
        });
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

        this.updateurchaseState(updatedIngrediants)
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

        this.updateurchaseState(updatedIngrediants)
    }

    purchaseHandler = () => {
        this.setState({purchasing:true})
    }
    

    render(){

        const disabledInfo = {
            ...this.state.ingrediants
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = <OrderSummary 
                            ingrediants={this.state.ingrediants}
                            purchaseCancelled={this.purchaseCancelHandler}
                            price={this.state.totalPrice.toFixed(2)}
                            purchaseContinued={this.purchaseContinueHandler}/>

        if(this.state.loading){
            orderSummary = <Spinner />
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingrediants={this.state.ingrediants}/>
                <BuildControls 
                    ingrediantAdded={this.addIngrediantsHandler} 
                    ingrediantRemoved={this.removeIngrediantHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder,axios);