import React from 'react';
import Input from './Input';
import Button from './Button';
import Form from './Form';
import ContainerTitle from './ContainerTitle';


function ContainerRegister(props) {
    return(
         <div className="Container">
             <ContainerTitle title="Titulo aqui"/>
             <Form action="/post">
                <Input 
                    label="Name"
                    laceholder="Nome completo"
                />
                <Input 
                    label="Cargo"
                    placeholder=""
                />
                <Input 
                    label="Cidade"
                    placeholder="Qual a cidade?"
                />
                <Button name="Cadatrar"></Button>
             </Form>
             
                

        </div>
    );
};

export default ContainerRegister;