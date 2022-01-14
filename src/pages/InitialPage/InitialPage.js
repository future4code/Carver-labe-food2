import React, { useEffect } from 'react';
import { ContainerInitialPage } from './styled';
import { CardMedia } from '@material-ui/core';
import LogoImg from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { goToHome, goToLogin } from '../../router/coordinator';

const InitialPage = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  
  useEffect(()=>{
    if (token === null){
      setTimeout(()=> goToLogin(navigate),2000)
    }else{
      setTimeout(()=> goToHome(navigate),2000)
    }
    
  },[])

  return (
    <ContainerInitialPage>
      <CardMedia
        component="img"
        image={LogoImg}
        alt="pokemons"
      />

    </ContainerInitialPage>
  );
}

export default InitialPage