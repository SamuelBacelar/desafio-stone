import React from 'react';
import Input from './Input';
import Button from './Button';
import ContainerTitle from './ContainerTitle';


function ContainerRegister(props) {
    return(
         <div className="Container">
             <ContainerTitle title="Titulo aqui"/>
             <form action="https://hooks.zapier.com/hooks/catch/6208795/o69xjwj/" method="post">
                <Input 
                    label="Name"
                    placeholder="Bruna Marques Villa Nova"
                />
                <Input 
                    label="Cargo"
                    placeholder="Ex: Analista de Dados"
                />
                <Input 
                    label="Endereço"
                    placeholder="Ex: Rua Fedrerico Mumbaça, 512, apto 303"
                />
                <Input 
                    label="Cidade"
                    placeholder="Ex: Rio de Janeiro"
                />
                <Input 
                    label="Estado"
                    placeholder="Ex: RJ"
                />
                <Input 
                    label="Salário"
                    placeholder="Ex: R$3000,00"
                />
                <Input 
                    label="Rg"
                    placeholder="18.188.188-8"
                />
                <Input 
                    label="CPF"
                    placeholder="188.188.188-88"
                />
                <Button name="Cadatrar" type="submit"></Button>
             </form>
             
                

        </div>
    );
};

export default ContainerRegister;