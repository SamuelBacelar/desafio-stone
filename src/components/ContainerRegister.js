import React, { useState } from 'react';
import Input from './Input';
import ContainerTitle from './ContainerTitle';
import Button from './Button';
import { Route, Redirect } from 'react-router';
const rp = require('request-promise');





function ContainerRegister(props) {
    const API_URL = "http://localhost:3002/employee"; 
    let [state, setState] = useState(false);

    const [employee, setEmployee] = useState({
        name: '',
        job: '',
        adress: '',
        city: '',
        state: '',
        salary: '',
        rg: '',
        cpf: '',
        allocation: ''
      });

      function handleChange(event) {
        const { name, value } = event.target;
    
        setEmployee(prevEmployee => {
          return {
            ...prevEmployee,
            [name]: value
          };
        });
      }


      async function submitEmployee(event) {
        setEmployee({
            name: '',
            job: '',
            adress: '',
            city: '',
            state: '',
            salary: '',
            rg: '',
            cpf: '',
            allocation: ''
        });
        

        event.preventDefault();
        var options = {
            method: 'POST',
            uri: API_URL,
            form: {
                name: employee.name,
                job: employee.job,
                adress: employee.adress,
                city: employee.city,
                state: employee.state,
                salary: employee.salary,
                rg: employee.rg,
                cpf: employee.cpf,
                allocation: employee.allocation
            },
            headers: {
                /* 'content-type': 'application/x-www-form-urlencoded' */ // Is set automatically
            }
        };
         
        rp(options)
            .then(function (body) {
                // POST succeeded...
               
            })
            .catch(function (err) {
                // POST failed...
        });

        setState(true);
      }

      function redirectTo() {
        return <Redirect to="/" />;
      }

      if (state) return redirectTo();

    return(
         <div className="Container">
             <ContainerTitle title="Informações do funcionário"/>
             <form className="Register-form" onSubmit={submitEmployee}>
                <Input  
                    label="Nome Completo"
                    type="text" 
                    name="name" 
                    placeholder="Ex: Bruna Marques Villa Nova" 
                    onChange={handleChange}
                    value={employee.name}
                    className="Input"
                />
                <Input 
                    label="Cargo"
                    type="text"
                    name="job"
                    placeholder="Ex: Analista de Dados"
                    onChange={handleChange}
                    value={employee.job}
                />
                <Input 
                    label="Endereço"
                    type="text"
                    name="adress"
                    placeholder="Ex: Rua Fedrerico Mumbaça, 512, apto 303"
                    onChange={handleChange}
                    value={employee.adress}
                />
                <Input 
                    label="Cidade"
                    type="text"
                    name="city"
                    placeholder="Ex: Rio de Janeiro"
                    onChange={handleChange}
                    value={employee.city}
                />
                <Input 
                    label="Estado"
                    type="text"
                    name="state"
                    placeholder="Ex: RJ" 
                    onChange={handleChange}
                    value={employee.state}
                />
                <Input 
                    label="Salário"
                    type="text"
                    name="salary"
                    placeholder="Ex: R$3000,00" 
                    onChange={handleChange}
                    value={employee.salary}
                />
                <Input 
                    label="RG"
                    type="text"
                    name="rg"
                    placeholder="18.188.188-8" 
                    onChange={handleChange}
                    value={employee.rg}
                />
                <Input
                    label="CPF" 
                    type="text"
                    name="cpf"
                    placeholder="188.188.188-88" 
                    onChange={handleChange}
                    value={employee.cpf}
                />
                <Input
                    label="Alocação" 
                    type="text"
                    name="allocation"
                    placeholder="Ex: Interno" 
                    onChange={handleChange}
                    value={employee.allocation}
                />
                <Button  name="Cadastrar" type="submit"/>
             </form>
             
        </div>
    );
};

export default ContainerRegister;