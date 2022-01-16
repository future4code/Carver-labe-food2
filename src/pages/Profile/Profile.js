import React, { useContext, useEffect, useState } from 'react'
import { AddressInformation, ButtonContainer, GrayText, Line, OrderHistoryArea, PersonalInformationProfileArea, ProfilePageContainer, BotaoLogout } from './styled'
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import GlobalStateContext from '../../contexts/GlobalStateContext.js';
import { getFullAddress, getOrderHistory } from '../../services/services.js';
import { useNavigate } from 'react-router-dom';
import CardOrderHistory from '../../components/CardOrderHistory/CardOrderHistory.js';
import { goToLogin } from '../../router/coordinator.js';
import { Button } from '@material-ui/core';
import useProtectedPages from '../../hooks/useProtectedPages';

export default function Profile() {
    const { states, setters } = useContext(GlobalStateContext)
    const [address, setAddress] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const [orderHistory, setOrderHistory] = useState([])
    useProtectedPages()

    const clear = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setters.setUser([])
        goToLogin(navigate)
    }

    useEffect(() => {
        getFullAddress().then(res => {
            setAddress(res.data.address || {})
            setters.setUser({ ...states.user, address: res.data.address })
            setLoading(false)
        }).catch((error) => {
            navigate("/cadastrar-endereco")
        })

        getOrderHistory(setOrderHistory)

    }, [])

    const loadCards = () => {
        return orderHistory.length > 0 
        ? orderHistory.map((order) => {
            return <CardOrderHistory order={order} />
        })
        :<p style={{ textAlign: "center", marginBottom: "10px" }}>Você não realizou nenhum pedido</p>
    }

    return (
        <ProfilePageContainer>
            <PersonalInformationProfileArea>
                <h5>{states.user.name}</h5>
                <h5>{states.user.email}</h5>
                <h5>{states.user.cpf}</h5>

                <ButtonContainer onClick={() => navigate('/cadastro')}>
                    <IconButton aria-label="delete">
                        <CreateOutlinedIcon />
                    </IconButton>
                </ButtonContainer>

            </PersonalInformationProfileArea>

            {
                loading
                    ? <>
                        <CircularProgress />
                        <h2>Carregando...</h2>
                    </>
                    : <AddressInformation>
                        <GrayText>Endereço cadastrado</GrayText>
                        <h5>{`${address.street}, ${address.number}${" " + address.complement + " -" || "-"} ${address.neighbourhood}  - ${address.city}`}</h5>
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

                < BotaoLogout>
                    <Button variant="contained" color="primary" onClick={clear}>
                        Logout
                    </Button>
                </ BotaoLogout>
            </OrderHistoryArea>

        </ProfilePageContainer>
    )
}
