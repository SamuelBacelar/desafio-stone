import React from 'react';
import NoEmployee from './NoEmployee';
import EmployeeTable from './EmployeeTable';

const hasEmployee = true;


function Container(props) {
    return(
         <div className="Container">
            {hasEmployee === true ? <EmployeeTable/> : <NoEmployee/>}
            {props.children}
        </div>
    );
};

export default Container;