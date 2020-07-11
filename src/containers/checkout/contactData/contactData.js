import React, { Component } from 'react';

import Button from '../../../components/UI/Button/button';
import Spinner from '../../../components/UI/Spinner/spinner'
import classes from './contactData.module.css'
import axios from '../../../axios-orders'
import { withRouter } from 'react-router'
import Input from '../../../components/UI/Input/input'

class ContactData extends Component {
    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        },
        loading:false
    }
    orderHandler = (event) => {
        event.preventDefault();

        this.setState({loading:true});
        const order = {
            ingrediants: this.props.ingrediants,
            price:this.props.price,
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
            this.setState({loading:false });
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({loading:false })
        });
    }

    render() {
        let form =(
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your name"/>
                <Input inputtype="input" type="email" name="email" placeholder="Your Mail"/>
                <Input inputtype="input" type="text" name="street" placeholder="Your Street"/>
                <Input inputtype="input" type="text" name="postal" placeholder="Postal code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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