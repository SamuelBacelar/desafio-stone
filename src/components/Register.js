import React, { useState } from 'react';
import '../App.css';
import Header from './Header'
import Presentation from './Presentation';
import Footer from './Footer';
import ContainerRegister from './ContainerRegister';
import PresTitle from './PresTitle';
import BackBtn from './buttons/BackBtn';



function Register() {

  const [employees, setEmployees] = useState([]);

  function addEmployee(newEmployee) {
   setEmployees(prevEmployees => {
     return [...prevEmployees, newEmployee]
   })
   console.log(employees);
  }

  return (
    <div>
      <Header/>
      <Presentation>
      <div className="Pres-wrapper">
        <PresTitle
              title="Registro de Funcionário"
              description="Esta seção dedica-se as informações do nosso querido novo colaborador"
          />
          <BackBtn route="/" name="Voltar Página" className="Back-btn"/>
      </div>
      </Presentation>
      <ContainerRegister
        onAdd = {addEmployee}
      />
      <Footer/>
    </div>
   
  );
}

export default Register;