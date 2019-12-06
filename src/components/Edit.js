import React, { useState } from 'react';
import '../App.css';
import Header from './Header';
import Presentation from './Presentation';
import Footer from './Footer';
import ContainerEdit from './ContainerEdit';
import PresTitle from './PresTitle';
import { withRouter } from 'react-router-dom';
import BackBtn from './buttons/BackBtn';


function Edit() {

  
    return (
      <div>
        <Header/>
        <Presentation>
        <div className="Pres-wrapper">
            <PresTitle
                title="Edição de Informações de Funcionário"
                description="Corrija, atualize ou acrescente informações de um funcionário já cadastrado"
            />
            <BackBtn route="/" name="Voltar Página" className="Back-btn"/>
            </div>
          
        </Presentation>
        <ContainerEdit/>
        <Footer/>
      </div>
     
    );
  }
  
  export default withRouter(Edit);