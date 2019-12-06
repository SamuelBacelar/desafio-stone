import React, { useState, useEffect } from 'react';
import Input from './Input';
import ContainerTitle from './ContainerTitle';
import Button from './Button';
import { Route, Redirect } from 'react-router';
import BtnRoute from './buttons/BtnRoute';
import { withRouter } from 'react-router-dom';
const rp = require('request-promise');


function ContainerEdit(props) {
    const API_URL = "http://localhost:3002/employee/" + props.match.params.id; 
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
    let [state, setState] = useState(false);

    useEffect(() => {
        fetch(API_URL)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Something went wrong");
            }
          })
          .then(jsonResponse => {
            setEmployee(jsonResponse);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

      function handleChange(event) {
        const { name, value } = event.target;
    
        setEmployee(prevEmployee => {
          return {
            ...prevEmployee,
            [name]: value
          };
        });
      }


      async function submitUpdatedEmployee(event) {
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
        
        var options = {
            method: 'PUT',
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
                console.log(body)
               
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
             <ContainerTitle title="Titulo aqui"/>
             <form className="Register-form" onSubmit={submitUpdatedEmployee}>
                <Input  
                    label="Nome Completo"
                    type="text" 
                    name="name" 
                    placeholder="Ex: Bruna Marques Villa Nova" 
                    onChange={handleChange}
                    value={employee.name}
                    
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
                <div className="Edit-btns">
                    <BtnRoute route="/" name="Cancelar" className="Cancel-btn" type="button"/> 
                    <Button  name="Salvar" type="submit"/>
                </div>
                
             </form>
             
        </div>
    );
};

export default withRouter(ContainerEdit);