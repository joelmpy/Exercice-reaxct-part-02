import React from 'react';


 export function Counter (props){
 
        return (
            <div>
                <h2>{props.count}</h2>
    <button onClick = {props.addFunction} style = {{backgroundColor : "red", fontSize : '100px', width : '100px' }} >+</button>
    <button onClick = {props.subtractFunction} style = {{backgroundColor : "green", fontSize : '100px',width : '100px' }} >-</button> 
            </div>
        )
    
    }
   

