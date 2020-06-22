import React from 'react';

import classes from './buldControls.module.css'
import BuildControl from './BuildControl/buildControl'

const controls = [
    {label:'Salad',type:'salad'},
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'},
    {label:'Bacon',type:'bacon'}
];

const buldControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price:<strong>{props.price.toFixed(2)}$</strong></p>
        {controls.map(ctrl =>(
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingrediantAdded(ctrl.type)}
                removed={() => props.ingrediantRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buldControls