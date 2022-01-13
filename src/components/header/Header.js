import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToHome, goToLogin, goToProfile, goToRegister, goToReturn } from '../../router/coordinator'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Toolbar, AppBar } from '@material-ui/core';
import { Container } from './header.css';

const useStyles1 = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const Header = () => {
    const classes1 = useStyles1();
    const history = useNavigate()
    const location = useLocation()
    const token = localStorage.getItem("token")
   
    const homeHeader = () => {
        console.log("entrou")
        return (
            <Container>
                <header>
                    <AppBar position="static">
                        <Toolbar>
                            <h4>FutureEats</h4>
                        </Toolbar>
                    </AppBar>
                </header>
            </Container>
        )
    }

    const cadastroHeader = () => {
        return (
            <Container>
                <header>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu">
                                <ArrowBackIosIcon onClick={() => goToLogin(history)} />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </header>
            </Container>
        )
    }

    const enderecoHeader = () => {
        return (
            <Container>
                {
                    token ?
                        <header>
                            <AppBar position="static">
                                <Toolbar>
                                    <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu">
                                        <ArrowBackIosIcon onClick={() => goToProfile(history)} />
                                    </IconButton>
                                    <p>Endereço</p>
                                </Toolbar>
                            </AppBar>
                        </header>
                        : <header>
                            <AppBar position="static">
                                <Toolbar>
                                    <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu">
                                        <ArrowBackIosIcon onClick={() => goToLogin(history)} />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                        </header>
                }
            </Container>
        )
    }

    const buscarHeader = () => {
        return (
            <Container>
                <header>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu">
                                <ArrowBackIosIcon onClick={() => goToHome(history)} />
                            </IconButton>
                            <p>Busca</p>
                        </Toolbar>
                    </AppBar>
                </header>
            </Container>
        )
    }

    const carrinhoHeader = () => {
        return (
            <Container>
                <header>
                    <AppBar position="static">
                        <Toolbar>
                            <h4>Meu carrinho</h4>
                        </Toolbar>
                    </AppBar>
                </header>
            </Container>
        )
    }

    const perfilHeader = () => {
        return (
            <Container>
                <header>
                    <AppBar position="static">
                        <Toolbar>
                            <h4>Meu perfil</h4>
                        </Toolbar>
                    </AppBar>
                </header>
            </Container>
        )
    }

    const editarPerfilHeader = () => {
        return (
            <Container>
                <header>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu">
                                <ArrowBackIosIcon onClick={() => goToProfile(history)} />
                            </IconButton>
                            <p>Editar</p>
                        </Toolbar>
                    </AppBar>
                </header>
            </Container>
        )
    }

    const inicialHeader = () => {
        return (
            <></>
        )
    }

    const loginHeader = () => {
        return (
            <></>
        )
    }

    const detalhesRestauranteHeader = () => {
        return (
            <Container>
                <header>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu">
                                <ArrowBackIosIcon onClick={() => goToHome(history)} />
                            </IconButton>
                            <p>Restaurante</p>
                        </Toolbar>
                    </AppBar>
                </header>
            </Container>
        )
    }

    const mudarHeader = () => {
        
        switch (location.pathname) {
            case '/home':
               return homeHeader();
            case '/cadastro':
                return cadastroHeader()
            case '/cadastrar-endereco':
                return enderecoHeader();
            case '/busca':
                return buscarHeader();
            case '/carrinho':
                return carrinhoHeader()
            case '/perfil':
                return perfilHeader();
            case '/editar-perfil':
                return editarPerfilHeader()
            case '/':
                return inicialHeader()
            case '/login':
                return loginHeader()
            default:
               return detalhesRestauranteHeader()  
        }
    }

    return (
        <>{mudarHeader()}</>
    )
}

export default Header