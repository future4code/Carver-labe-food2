import React from 'react'
import { HeaderContainer, HeaderTitle, HeaderTitleArea } from './header.css'
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
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '85%',
            textTransform: "none",
        },
    },
    margin: {
        margin: theme.spacing(1),
        width: '85%',
    },
    withoutLabel: {
        marginTop: theme.spacing(1),
        width: '85%',
    },
    botao: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));
const Header = () => {
    const classes1 = useStyles1();
    const classes = useStyles();
    const history = useNavigate()
    const location = useLocation()
    const token = localStorage.getItem("token")
    // <HeaderContainer>
    //     <HeaderTitleArea>
    //         <HeaderTitle>
    //             Meu perfil
    //         </HeaderTitle>
    //     </HeaderTitleArea>
    // </HeaderContainer>
    return (
        <Container>
            {
                location.pathname === '/home' ?
                    <header>
                        <AppBar position="static">
                            <Toolbar>
                                <h4>FutureEats</h4>
                            </Toolbar>
                        </AppBar>
                    </header>
                    : location.pathname === '/cadastro' ?
                        <header>
                            <AppBar position="static">
                                <Toolbar>
                                    <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu">
                                        <ArrowBackIosIcon onClick={() => goToLogin(history)} />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                        </header>
                        : location.pathname === '/cadastrar-endereco' ?
                            token ?
                                <header>
                                    <AppBar position="static">
                                        <Toolbar>
                                            <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu">
                                                <ArrowBackIosIcon onClick={() => goToRegister(history)} />
                                            </IconButton>
                                            <p>Endereço</p>
                                        </Toolbar>
                                    </AppBar>
                                </header>
                                : <header>
                                    <AppBar position="static">
                                        <Toolbar>
                                            <IconButton edge="start" className={classes1.menuButton} color="inherit" aria-label="menu">
                                                <ArrowBackIosIcon onClick={() => goToProfile(history)} />
                                            </IconButton>
                                        </Toolbar>
                                    </AppBar>
                                </header>
                            : location.pathname === '/busca' ?
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
                                : location.pathname === '/carrinho' ?
                                    <header>
                                        <AppBar position="static">
                                            <Toolbar>
                                                <h4>Meu carrinho</h4>
                                            </Toolbar>
                                        </AppBar>
                                    </header>
                                    : location.pathname === '/perfil' ?
                                        <header>
                                            <AppBar position="static">
                                                <Toolbar>
                                                    <h4>Meu perfil</h4>
                                                </Toolbar>
                                            </AppBar>
                                        </header>
                                        : location.pathname === '/editar-perfil' ?
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
                                            : location.pathname === '/' ? <></> 
                                            : location.pathname === '/login' ? <></> 
                                            :
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
            }
        </Container>
    )
}
export default Header