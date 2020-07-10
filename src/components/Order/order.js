import React from 'react';

import classes from './order.module.css'



    const orders = (props) => {

        const ingrediants = [];

        for (let ingrediantName in props.ingrediants){
            ingrediants.push({
                        name:ingrediantName,
                        amount:props.ingrediants[ingrediantName]
                    }
                );
        }

        const ingrediantOutput = ingrediants.map(ig => {
            return <span 
                    key={ig.name}
                    style={{
                        textTransform:'capitalize',
                        display: 'inline-block',
                        margin:'0 8px',
                        border: '1px solid #ccc',
                        padding: '5px'
                    }}>{ig.name} ({ig.amount})</span>;
        });

        return (
            <div className={classes.Order}>
            <p>Ingrediants: {ingrediantOutput}</p>
            <p>Price:<strong>USD {props.price.toFixed(2)}</strong></p>
            </div>
        );
        
        };

export default orders;