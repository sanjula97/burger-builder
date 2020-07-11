import React, { Component } from 'react';

import Button from '../../../components/UI/Button/button';
import Spinner from '../../../components/UI/Spinner/spinner'
import classes from './contactData.module.css'
import axios from '../../../axios-orders'
import { withRouter } from 'react-router'
import Input from '../../../components/UI/Input/input'

class ContactData extends Component {
    state={
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your name'
                },
                value:''
            },
            street:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street'
                },
                value:''
            },
            zipcode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Zipcode'
                },
                value:''
            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country'
                },
                value:''
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email'
                },
                value:''
            },
            delivaryMethod:{
                elementType:'select',
                elementConfig:{
                    options: [
                        {value:'fastest',displayValue:'Fastest'},
                        {value:'cheapest',displayValue:'Cheapest'}
                    ]
                },
                value:''
            } 
        },  
        loading:false
    }

    inputChangedHandler = (event,inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };

        const updatedFormElemnt = {
            ...updatedOrderForm[inputIdentifier]
        };
 
        updatedFormElemnt.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElemnt;
        this.setState({orderForm:updatedOrderForm});
     }

    orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
        }
        this.setState({loading:true});
        const order = {
            ingrediants: this.props.ingrediants,
            price:this.props.price,
            orderData: formData
        }
        axios.post('/orders.json',order)
        .then(response => {
            this.setState({loading:false });
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({loading:false })
        });
    }

    render() {
        const formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            });
        };
        let form =(
            <form  onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event,formElement.id)}/>
                ))}
                <Button btnType="Success" >ORDER</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return(
        <div className={classes.ContactData}>
            <h4>Enter your contact data</h4>
            {form}
        </div>
        );
    }
}

export default withRouter(ContactData);