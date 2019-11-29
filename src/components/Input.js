import React from 'react';

function Input(props) {
    return(
         <div className="">
           <label>{props.label}</label>
           <input type={props.type} placeholder={props.placeholder}></input>
        </div>
    );
};

export default Input;