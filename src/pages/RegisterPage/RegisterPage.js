import React, { useContext, useState } from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CardMedia, TextField, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, Toolbar, AppBar, FormHelperText } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from "./styled";
import Logo from '../../assets/logo-preta.png'
import clsx from 'clsx';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import useForm from "../../hooks/useForm";
import { singUp } from "../../services/services";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../contexts/GlobalStateContext";


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

const RegisterPage = () => {
    const classes = useStyles();
    const navigate = useNavigate()
    const { states, setters, requests } = useContext(GlobalStateContext)

    const [form, onChange] = useForm(states.user ||
    {
        name: '',
        email: '',
        password: '',
        cpf: ''
    }
    )
    const [loading, setLoading] = useState(false)

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
        error: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMatchPassword = (e) => {

        if (values.password !== form.password) {
            setValues({ ...values, error: true })
        } else {
            setValues({ ...values, error: false })

        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (states.user.name) {
            setLoading(true)
            requests.requestUpdateProfile(form, setLoading, navigate)
        } else {
            if (values.password == form.password) {
                setLoading(true)
                requests.requestSignup(form, navigate, setLoading)
            }
        }

    }

    return (
        <Container>
            {
                loading
                    ? <>
                        <CircularProgress />
                        <h2>Enviando</h2>
                    </>
                    : <>
                        <CardMedia
                            component="img"
                            image={Logo}
                            alt="pokemons"
                        />
                        {
                            states.user.name
                                ? <></>
                                : <p>Cadastrar</p>
                        }
                        <form className={classes.root} noValidate={false} autoComplete="on" onSubmit={handleSubmit}>
                            <TextField
                                id="filled-textarea"
                                value={form.name}
                                onChange={onChange}
                                label="Nome"
                                placeholder="Nome e sobrenome"
                                variant="outlined"
                                name="name"
                                required
                            />
                            <TextField
                                type="email"
                                id="filled-textarea"
                                name="email"
                                value={form.email}
                                onChange={onChange}
                                label="E-mail"
                                placeholder="email@email.com"
                                multiline
                                variant="outlined"
                                required
                            />
                            <TextField
                                id="outlined-number"
                                label="CPF"
                                type="texte"
                                variant="outlined"
                                name="cpf"
                                value={form.cpf}
                                onChange={onChange}
                                placeholder="000.000.000-00"
                                mask={'[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}'}
                                inputProps={{ pattern: '[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}' }}
                                required
                            />
                            {
                                states.user.name
                                    ? <></>
                                    : <>
                                        <FormControl required className={clsx(classes.margin, classes.textField)} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                placeholder="Minimo 6 caracteres"
                                                type={values.showPassword ? 'text' : 'password'}
                                                name="password"
                                                value={form.password}
                                                onChange={onChange}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                labelWidth={70}
                                                required
                                            />
                                        </FormControl>
                                        <FormControl required className={clsx(classes.margin, classes.textField)} variant="outlined">
                                            <InputLabel
                                                htmlFor="outlined-adornment-password"
                                                error={values.error}
                                            >Confirmar</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                placeholder="Confirme a senha anterior"
                                                type={values.showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                onChange={handleChange('password')}
                                                onKeyUp={handleMatchPassword}
                                                inputProps
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                labelWidth={70}
                                                required
                                                error={values.error}
                                            />
                                            {values.error ? <FormHelperText>As senhas precisam ser iguais</FormHelperText> : <></>}
                                        </FormControl>
                                    </>
                            }
                            <>
                                <Button style={{ textTransform: "none" }} variant="contained" color="primary" type="submit" className={classes.withoutLabel} >
                                    {states.user.name
                                        ? 'salvar'
                                        : "criar"}
                                </Button>
                            </>
                        </form >
                    </>
            }
        </Container>
    )
}

export default RegisterPage