import React from 'react';
import EmployeeRow from './EmployeeRow';
import tempDB from '../temporaryDB';
import Filter from './Filter';
import SearchFilterComp from './SearchFilterComp';


function EmployeeTable(props) {
    return(
        
         <div>
             <SearchFilterComp/>
   
        </div>
    );
};

export default EmployeeTable;