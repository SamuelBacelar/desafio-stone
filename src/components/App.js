import React from 'react';
import '../App.css';
import Header from './Header'
import Presentation from './Presentation';
import Container from './Container';
import Footer from './Footer';
import Button from './Button';
import TempDB from '../temporaryDB';
import PresTitle from './PresTitle';


function App() {
  return (
    <div>
      <Header/>
      <Presentation>
        <PresTitle
          title="Quadro de Funcionários"
          description="Aqui vai um texto sobre a seção"
        />
        <Button name="Novo funcionário"/>
      </Presentation>
      <Container/>
      <Footer/>
    </div>
   
  );
}

export default App;
