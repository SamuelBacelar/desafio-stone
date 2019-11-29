import React from 'react';
import tempDB from '../temporaryDB';


function EmployeeRow(props) {
    return(
        <tr>
            <td>{props.name}</td>
            <td>{props.job}</td>
            <td>{props.city}</td>
            <td>{props.allocation}</td>
        </tr>    
    );
};

export default EmployeeRow;