import React from 'react';
import Button from './Button';


function NoEmployee(props) {
    return(
         <div>
            <h2> Nenhum funcionário registrado</h2>
            <Button name="Novo funcionário"/>
        </div>
    );
};

export default NoEmployee;