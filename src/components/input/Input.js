import React, { Fragment } from 'react';

import './input.css';

const Input =(props)=>{
    return(
        <input   
            type="text" 
            name="search"
            placeholder= {props.placeholder}
            value= {props.value}
            onChange= {props.onChange}
            onKeyPress={(e)=>{
                if(e.key==='Enter'){
                    e.preventDefault();
                }
            }}  
            />
         );
}
export default Input;