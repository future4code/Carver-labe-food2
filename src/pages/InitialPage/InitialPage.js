import React from 'react';
import { ContainerInitialPage } from './styled';
import { CardMedia } from '@material-ui/core';
import LogoImg from '../../assests/logo.png'
import { useNavigate } from 'react-router-dom';
import { goToHome } from '../../router/coordinator';

const InitialPage = () => {
  const history = useNavigate()
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