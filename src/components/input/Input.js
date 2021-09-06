import React, { Fragment } from 'react';


const Input =(props)=>{
    console.log(props.emoji); 
    return(
<input value={props.value} onChange={props.onChange}/>
    );
}
export default Input;