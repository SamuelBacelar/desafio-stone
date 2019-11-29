import React from 'react';
import '../App.css';
import Header from './Header'
import Presentation from './Presentation';
import Container from './Container';
import Footer from './Footer';
import ContainerRegister from './ContainerRegister';
import PresTitle from './PresTitle';


function App() {
  return (
    <div>
      <Header/>
      <Presentation>
        <PresTitle
            title="Registro de Funcionário"
            description="Aqui vai um texto sobre a seção"
        />
      </Presentation>
      <ContainerRegister/>
      <Footer/>
    </div>
   
  );
}

export default App;