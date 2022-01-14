import React, { useContext, useEffect, useState } from 'react'
import { AddressInformation, ButtonContainer, GrayText, Line, OrderDate, OrderHistoryArea, OrderHistoryCard, OrderHistoryTitleCard, OrderTotalCost, PersonalInformationProfileArea, ProfilePageContainer } from './profile.css.js'
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import GlobalStateContext from '../../contexts/GlobalStateContext.js';
import { getFullAddress, getOrderHistory } from '../../services/services.js';
import { useNavigate } from 'react-router-dom';
import CardOrderHistory from '../../components/CardOrderHistory/CardOrderHistory.js';
import { Card } from '@material-ui/core';

export default function Profile() {
    const {states, setters, requests} = useContext(GlobalStateContext)
    const [address, setAddress] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const [orderHistory, setOrderHistory] = useState([])

    useEffect(() => {
        getFullAddress().then(res=>{
            setAddress(res.data.address)
            setters.setUser({...states.user, address: res.data.address})
            setLoading(false)
        })

        getOrderHistory(setOrderHistory)

    }, [])

    const loadCards = () => {
        console.log(orderHistory)
        return orderHistory !== [] 
        ? orderHistory.map((order) => {
            return <CardOrderHistory order={order} />
        })
        :<>Não há pedidos!</>
    }

    return (
        <ProfilePageContainer>
            <PersonalInformationProfileArea>
                <h5>{states.user.name}</h5>
                <h5>{states.user.email}</h5>
                <h5>{states.user.cpf}</h5>

                <ButtonContainer onClick={()=> navigate('/cadastro')}>
                    <IconButton aria-label="delete">
                        <CreateOutlinedIcon />
                    </IconButton>
                </ButtonContainer>
                
            </PersonalInformationProfileArea>

            {
                loading
                ?<>
                    <CircularProgress/>
                    <h2>Carregando...</h2>
                </>
                :<AddressInformation>
                    <GrayText>Endereço cadastrado</GrayText>
                    <h5>{`${address.neighbourhood}, ${address.number} - ${address.city}`}</h5>
                    <ButtonContainer onClick={() => navigate('/cadastrar-endereco')}>
                        <IconButton aria-label="delete">
                            <CreateOutlinedIcon />
                        </IconButton>
                    </ButtonContainer>
                </AddressInformation>

            }

            <OrderHistoryArea>
                <h5>Histórico de pedidos</h5>
                <Line/>
                    {loading
                    ?<>
                        <CircularProgress/>
                        <h2>Carregando...</h2>
                    </>
                    :loadCards()
                }
                {/* <OrderHistoryCard>
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
                </OrderHistoryCard> */}
            </OrderHistoryArea>
        </ProfilePageContainer>
    )
}
