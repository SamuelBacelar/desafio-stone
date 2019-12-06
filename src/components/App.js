import React from 'react';
import '../App.css';
import Header from './Header'
import Presentation from './Presentation';
import Container from './Container';
import Footer from './Footer';
import BtnRoute from './buttons/BtnRoute';
import TempDB from '../temporaryDB';
import PresTitle from './PresTitle';


function App() {
  return (
    <div>
      <Header/>
      <Presentation>
        <div className="Pres-wrapper">
          <PresTitle
              title="Quadro de Funcionários"
              description="Todas as informações sobre os funcionários da Stone em um só lugar"
            />
            <BtnRoute route="/register" name="Novo funcionário" className="Button"/>
          </div>
      </Presentation>
      <Container/>
      <Footer/>
    </div>
   
  );
}

export default App;
