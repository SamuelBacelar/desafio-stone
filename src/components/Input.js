import React from 'react';

function Input(props) {
    return(
         <div className="Input">
           <label>{props.label}</label>
           <input 
                type={props.type}
                name={props.name} 
                placeholder={props.placeholder} 
                onChange={props.onChange}
                value={props.value}
                required
                ></input>
        </div>
    );
};

export default Input;

