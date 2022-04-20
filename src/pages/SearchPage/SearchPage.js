import React from "react"
import { useNavigate } from "react-router-dom"
import theme from "../../constants/theme"
import { ThemeProvider } from '@material-ui/styles';
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import { CardMedia, Card, CardContent, CardActionArea, Toolbar, Typography } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import { UnderTextCard, ContainerCardUnderText, SeachContainer, DivStyled, SeachContainer1,  CardContainer } from "./styled";
import { goToRestaurantDetails } from "../../router/coordinator";
import useRequestData from "../../hooks/useRequestData";


const useStylesCard = makeStyles({
    root: {
        maxWidth: 368,
        minWidth: 320,
        marginBottom: 12,
    },
    media: {
        height: 113,

    },
    content: {
        height: 64,
        margin: 0
    },
    text: {
        marginBottom: 0
    }
});




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        // color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch"
            }
        }
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        padding: 0
    }
}));







const SeachPage = () => {
    const navigate = useNavigate()
    const classes = useStyles();
    const classes2 = useStylesCard()
    const [value, setValue] = React.useState("");
    const [loading, setLoading] = React.useState(true)
    const restaurant = useRequestData('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants', [])


    const handleChange = (event) => {

        setValue(event.target.value)
        if (event.target.value.length === 0) {
            setLoading(true)
        }

        setTimeout(() => setLoading(false), 1.0 * 1000)

    };


    const cardFilter = restaurant.restaurants && restaurant.restaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(value.toLowerCase())
    })


    const card = restaurant.restaurants && cardFilter.map((restaurant) => {

        return (
            <Card key={restaurant.id} onClick={() => goToRestaurantDetails(navigate, restaurant.id)} className={classes2.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes2.media}
                        image={restaurant.logoUrl}
                        title={restaurant.name}
                    />
                    <CardContent className={classes2.content}>
                        <Typography className={classes2.text} gutterBottom variant="body2" color="primary">
                            {restaurant.name}
                        </Typography>
                        < ContainerCardUnderText className={classes2.text} gutterBottom variant="body2" color="primary">
                            <UnderTextCard gutterBottom variant="caption" color="initial" >
                                {`${restaurant.deliveryTime} min`}

                            </UnderTextCard>
                            <UnderTextCard gutterBottom variant="caption" color="initial" >
                                {`Frete R$ ${restaurant.shipping.toFixed(2)}`}
                            </UnderTextCard>
                        </ ContainerCardUnderText>
                    </CardContent>
                </CardActionArea>
            </Card>

        )
    })

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <SeachContainer1>
                    <SeachContainer color="transparent" position="static">
                        <Toolbar>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    value={value}
                                    placeholder="Restaurante"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput
                                    }}
                                    onChange={handleChange}
                                    inputProps={{ "aria-label": "search" }}
                                />

                            </div>
                        </Toolbar>
                    </SeachContainer>
                </SeachContainer1>
                <DivStyled>
                    {value === "" ?
                        <p> Busque por nome de restaurante</p> :
                        loading ?
                        <CircularProgress/>
                            :
                            cardFilter.length ? <CardContainer> {card }</CardContainer>: <p> Não encontramos :(</p>}
                </DivStyled>
            </div>
        </ThemeProvider>
    )
}
export default SeachPage