import React from 'react';
import { ContainerInitialPage } from './styled';
import { CardMedia } from '@material-ui/core';
import LogoImg from '../../assests/logo.png'

const InitialPage = () => {
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