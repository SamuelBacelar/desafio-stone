import React from 'react';

function Select(props) {
    return (
        <div>
        <label>{props.label}</label>
        <select onChange={props.onChange} >
              <option value="interno">Interno </option> 
              <option value="externo">Externo </option> 
        </select>
        </div>
    )
}


export default Select;