import React from 'react';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import * as C from "./styled";

const HeaderRestaurant = () => {
    return (
        <C.ContainerHeader>
                <KeyboardArrowLeftIcon fontSize="large"/>
                <C.Title>Restaurante</C.Title>
        </C.ContainerHeader>
    )
}

export default HeaderRestaurant;