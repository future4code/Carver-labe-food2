import React, { useEffect } from 'react';
import { ContainerInitialPage } from './styled';
import { CardMedia } from '@material-ui/core';
import LogoImg from '../../assests/logo.png'
import { useNavigate } from 'react-router-dom';


const InitialPage = () => {
  const navigate = useNavigate()
  
  useEffect(()=>{
    setTimeout(()=> navigate('/login'),2000)
  },[])


  return (
    <ContainerInitialPage>
      <CardMedia
        component="img"
        image={LogoImg}
        alt="pokemons"
        onClick={() => goToHome(history)}
      />

    </ContainerInitialPage>
  );
}

export default InitialPage