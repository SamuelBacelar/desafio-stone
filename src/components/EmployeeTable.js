import React from 'react';
import EmployeeRow from './EmployeeRow';
import tempDB from '../temporaryDB';
import Filter from './Filter';


function EmployeeTable(props) {
    return(
        
         <div>
             <Filter/>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Cargo</th>
                    <th>Cidade</th>
                    <th>Interno/Externo</th>
                </tr>
            
               {tempDB.map((employee) => {
                   return (
                       <EmployeeRow
                            name={employee.name}
                            job={employee.job}
                            city={employee.city}
                            allocation={employee.allocation}
                       />
                   )
               })}
        
            </table>
        </div>
    );
};

export default EmployeeTable;