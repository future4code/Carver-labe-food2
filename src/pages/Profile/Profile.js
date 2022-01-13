import React from 'react'
import { AdressInformation, ButtonContainer, GrayText, Line, OrderDate, OrderHistoryArea, OrderHistoryCard, OrderHistoryTitleCard, OrderTotalCost, PersonalInformationProfileArea, ProfilePageContainer } from './profile.css.js'
import IconButton from '@material-ui/core/IconButton';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';


export default function Profile() {
    return (
        <ProfilePageContainer>
            <PersonalInformationProfileArea>
                <h5>Bruna Oliveira</h5>
                <h5>bruna_o@gmail.com</h5>
                <h5>333.333.333-33</h5>

                <ButtonContainer>
                    <IconButton aria-label="delete">
                        <CreateOutlinedIcon />
                    </IconButton>
                </ButtonContainer>
                
            </PersonalInformationProfileArea>

            <AdressInformation>
                <GrayText>Endereço cadastrado</GrayText>
                <h5>Rua Alessandra Vieira, 42 - Santana</h5>
                <ButtonContainer>
                    <IconButton aria-label="delete">
                        <CreateOutlinedIcon />
                    </IconButton>
                </ButtonContainer>
            </AdressInformation>

            <OrderHistoryArea>
                <h5>Histórico de pedidos</h5>
                <Line/>
                <OrderHistoryCard>
                    <OrderHistoryTitleCard>Bullguer Vila Madalena</OrderHistoryTitleCard>
                    <OrderDate>23 outubro 2019</OrderDate>
                    <OrderTotalCost>Total R$67,00</OrderTotalCost>
                </OrderHistoryCard>
                <OrderHistoryCard>
                    <OrderHistoryTitleCard>Bullguer Vila Madalena</OrderHistoryTitleCard>
                    <OrderDate>23 outubro 2019</OrderDate>
                    <OrderTotalCost>Total R$67,00</OrderTotalCost>
                </OrderHistoryCard>
                <OrderHistoryCard>
                    <OrderHistoryTitleCard>Bullguer Vila Madalena</OrderHistoryTitleCard>
                    <OrderDate>23 outubro 2019</OrderDate>
                    <OrderTotalCost>Total R$67,00</OrderTotalCost>
                </OrderHistoryCard>
                <OrderHistoryCard>
                    <OrderHistoryTitleCard>Bullguer Vila Madalena</OrderHistoryTitleCard>
                    <OrderDate>23 outubro 2019</OrderDate>
                    <OrderTotalCost>Total R$67,00</OrderTotalCost>
                </OrderHistoryCard>
            </OrderHistoryArea>

        </ProfilePageContainer>
    )
}
