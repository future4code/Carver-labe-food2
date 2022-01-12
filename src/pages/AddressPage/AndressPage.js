import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, IconButton, Toolbar, AppBar } from '@material-ui/core';
import { Container } from "./styled";
import Header from "../../components/header/Header";

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

const AndressPage = () => {
    const classes1 = useStyles1();
    const classes = useStyles();

    const [values, setValues] = React.useState({
        name: '',
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <Container>
            
            <Header/>
            
            <p>Meu endereço</p>

            <form className={classes.root} noValidate autoComplete="off">

                <TextField
                    id="filled-textarea"
                    value={values.name}
                    onChange={handleChange('name')}
                    label="Logradouro"
                    placeholder="Rua / Av."
                    multiline
                    variant="outlined"
                    required
                />
                <TextField
                    id="outlined-number"
                    label="Número"
                    type="number"
                    variant="outlined"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    placeholder="Número"
                    required
                />

                <TextField
                    id="filled-textarea"
                    value={values.name}
                    onChange={handleChange('name')}
                    label="Complemento"
                    placeholder="Apto. / Bloco"
                    variant="outlined"
                    
                />
                <TextField
                    id="filled-textarea"
                    value={values.name}
                    onChange={handleChange('name')}
                    label="Bairro"
                    placeholder="Bairro"
                    multiline
                    variant="outlined"
                    required
                />
                <TextField
                    id="filled-textarea"
                    value={values.name}
                    onChange={handleChange('name')}
                    label="Cidade"
                    placeholder="Cidade"
                    multiline
                    variant="outlined"
                    required
                />
                <TextField
                    id="filled-textarea"
                    value={values.name}
                    onChange={handleChange('name')}
                    label="Estado"
                    placeholder="Ex: DF"
                    multiline
                    variant="outlined"
                    required
                />
                <>
                    <Button variant="contained" color="primary" className={classes.withoutLabel} >
                        Salvar
                    </Button>
                </>
            </form >
        </Container>
    )
}

export default AndressPage