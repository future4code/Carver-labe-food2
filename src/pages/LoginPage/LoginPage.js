import React from "react"
import { Button, CardMedia, TextField, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl } from "@material-ui/core";
import Logo from '../../assests/logo-preta.png'
import { Container } from "./styled";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '85%',
        },
    },
    margin: {
        margin: theme.spacing(1),
        width: '85%',

    },
    withoutLabel: {
        marginTop: theme.spacing(1),
        width: '85%',
        textTransform: "none",
    },
    botao: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));

const LoginPage = () => {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        showPassword: false,
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

    return (
        <Container>
            <CardMedia
                component="img"
                image={Logo}
                alt="pokemons"
            />
            <p>Entrar</p>
            <form className={classes.root} noValidate autoComplete="off">

                <TextField
                    type="email"
                    id="filled-textarea"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    label="E-mail"
                    placeholder="email@email.com"
                    multiline
                    variant="outlined"
                    required
                />

                <FormControl required className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        placeholder="Minimo 6 caracteres"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
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
                <>
                    <Button variant="contained" color="primary" className={classes.withoutLabel} >
                        Entrar
                    </Button>
                    <Button color="#000000" className={classes.botao}>
                        Não possui cadastro? Clique aqui
                    </Button>
                </>
            </form >
        </Container>
    )
}

export default LoginPage