import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@material-ui/core"
import theme from "../../constants/theme"
import { ThemeProvider } from '@material-ui/styles';
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from '@material-ui/core/styles';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { IconButton, CardMedia, Card, CardContent, CardActionArea, Box, Toolbar, AppBar, Typography } from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Text, TabsStyled, UnderTextCard, ContainerCardUnderText, SeachContainer } from "./styled";
import ImageCard from '../../assests/image.png'
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import GlobalStateContext from "../../contexts/GlobalStateContext";




const useStyles1 = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    }
}));

const useStylesScrollableTabs = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        textColor: "primary",

    }
}));

const useStylesBottomNavigation = makeStyles({
    root: {
        width: "100%"
    },

});

const useStylesCard = makeStyles({
    root: {
        maxWidth: 368,
        marginBottom: 12,
    },
    media: {
        height: 113,
    },
    content: {
        height: 36
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
        // vertical padding + font size from searchIcon
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

const SearchContainer = styled.div`
  margin: 12px 12px 16px 16px;
`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};


function a11yProps(index) {
    return {
        id: `scrollable-prevent-tab-${index}`,
        "aria-controls": `scrollable-prevent-tabpanel-${index}`
    };
}
const HomePage = () => {
    const navigate = useNavigate()
    const classes = useStyles();
    const classes1 = useStylesScrollableTabs();
    const classes2 = useStylesCard()
    const [value, setValue] = React.useState(0);
    const restaurant = [{
        "id": "1",
        "category": "Árabe",
        "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
        "address": "Rua das Margaridas, 110 - Jardim das Flores",
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fhabibs.jpg?alt=media&token=a30ea547-3a3b-4e80-b58e-b8dc976697de",
        "name": "Habibs",
        "shipping": 6,
        "deliveryTime": 60
    },
    {
        "id": "10",
        "description": "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Ftadashii.png?alt=media&token=0e4b9b8c-3b6e-4a78-bd49-d3576657a342",
        "deliveryTime": 50,
        "category": "Asiática",
        "shipping": 13,
        "address": "Travessa Reginaldo Pereira, 130 - Ibitinga",
        "name": "Tadashii"
    },
    {
        "id": "2",
        "address": "Avenida dos Papagaios, 1350 - Sta. Efigênia",
        "description": "McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda.",
        "shipping": 19,
        "deliveryTime": 15,
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fmcdonalds.png?alt=media&token=87a0fc52-3b8d-4475-b3e4-6ff730356121",
        "category": "Hamburguer",
        "name": "McDonalds"
    },
    {
        "id": "3",
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fcantinamammaperrotta.jpg?alt=media&token=3a4e76b6-3d07-414b-8672-e624f5a10a76",
        "category": "Italiana",
        "address": "Rua Barão do Rio Branco, 98 - Centro",
        "deliveryTime": 20,
        "description": "Restaurante Self Service e lanchonete localizado no Laboratório Nacional de Computação Científica",
        "shipping": 2,
        "name": "Cantina Mamma Perrotta"
    },
    {
        "id": "4",
        "address": "Travessa Junqueira de Melo, 315 - Marginal",
        "name": "Sorveteria Bacio di Latte",
        "shipping": 10,
        "deliveryTime": 45,
        "description": "Gelatos de raízes italianas feitos artesanalmente e com ingredientes de altíssima qualidade. Confira todos os nossos deliciosos sabores!",
        "category": "Sorvetes",
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fbaciodilatte.png?alt=media&token=03839175-d9b3-4024-a516-5ce2cbfc6f30"
    },
    {
        "id": "5",
        "shipping": 18,
        "category": "Carnes",
        "description": "Inaugurado em 1988 nos Estados Unidos e chegou ao Brasil 9 anos depois. Hoje, o restaurante marca presença em 20 cidades em todo o país, com um estilo casual que vai fazer você se sentir no Outback Australiano",
        "name": "Outback Steakhouse",
        "address": "Alameda dos Marsupiais, 505 - Humaitá",
        "deliveryTime": 20,
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Foutback.png?alt=media&token=6c3af525-e6f5-4f96-b5d5-a0ad6702a838"
    },
    {
        "id": "6",
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fsotero.jpg?alt=media&token=c8760cea-f8fc-4f66-b4b3-5c937beb8fe2",
        "category": "Baiana",
        "name": "Sotero Cozinha Original",
        "description": "Culinária baiana, como caldinho de sururu e acarajé, empório nordestino e bar com 400 rótulos de cachaça.",
        "shipping": 4,
        "deliveryTime": 40,
        "address": "Rua Dorival Caymmi, 149 - Alto dos Ibirás"
    },
    {
        "id": "7",
        "address": "Avenida das Andorinhas, 333 - Sta. Efigênia",
        "category": "Petiscos",
        "deliveryTime": 20,
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fbotecodeportal.jpg?alt=media&token=9b85ef89-0a4b-4390-84b1-858c1d3aafa1",
        "name": "Boteco de Portal",
        "shipping": 18,
        "description": "O bar tem um cardápio recheado de petiscos que acompanham o chope para o bate-papo num ambiente agradável.Amigos e amigas, temos o prazer de convidar vocês para conhecer nosso espaço!"
    },
    {
        "id": "8",
        "address": "Rua Visconde de Mauá, 990 - Centro",
        "name": "Chun-Li",
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fchun-li.jpg?alt=media&token=363418d5-247a-4690-a048-e2633e1346b5",
        "description": "Restaurante chinês com pratos típicos em diversos tamanhos, bebidas, ambiente moderno e opções para levar.",
        "category": "Asiática",
        "shipping": 17,
        "deliveryTime": 30
    },
    {
        "id": "9",
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fmexicanissimo.png?alt=media&token=c30a24af-4fce-47d8-9b9f-af7098e2dabe",
        "address": "Largo dos Jaguarés, 12 - Nova Bragança",
        "shipping": 3,
        "name": "Mexicaníssimo",
        "deliveryTime": 20,
        "category": "Mexicana",
        "description": "Falar em Mexicaníssimo é falar em comer uma comida tradicional e original mexicana! Diferentemente dos restaurantes tex-mex, aqui você encontra um menu completo tradicionalmente mexicano e com opções para vegetarianos e veganos."
    }]

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const scrollable = restaurant.map((restaurant) => {
        return restaurant.category
    })
    const scrollableNotRepeated = scrollable.filter(function (el, i) {
        return scrollable.indexOf(el) === i;
    })

 
    let index=0
    const tabs = scrollableNotRepeated.map((tab) => {
        index=index+1

        return (
                <Text label={tab} {...a11yProps(index)} />
        )
        
    })

    const filterRestaurants=(category)=>{
       const filter= restaurant.filter((rest)=>{
            return rest.category===category
        })
    
        return filter.map((restaurant)=>{
            return(
                <Card className={classes2.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes2.media}
                        image={ImageCard}
                        title={restaurant.name}
                    />
                    <CardContent className={classes2.content}>
                        <Typography className={classes.text} gutterBottom variant="body2" color="primary">
                           {restaurant.name}
                        </Typography>
                        < ContainerCardUnderText className={classes2.text} gutterBottom variant="body2" color="primary">
                            <UnderTextCard gutterBottom variant="caption" color="initial" >
                                {`${restaurant.deliveryTime} min`}
                            </UnderTextCard>
                            <UnderTextCard gutterBottom variant="caption" color="initial" >
                               {` frete R$: ${restaurant.shipping},00`}
                            </UnderTextCard>
                        </ ContainerCardUnderText>
                    </CardContent>
                </CardActionArea>
            </Card>
            )
        })
    }

    let index2=-1

    const tabspanel=tabs.map((tabs)=>{
        index2=index2+1
        return ( 
        <TabPanel value={value} index={index2}>
            {filterRestaurants(tabs.props.label)}
        </TabPanel>
        )
    })
    console.log(value)
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <SearchContainer>
                    <SeachContainer color="transparent" position="static">
                        <Toolbar>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Restaurante"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput
                                    }}
                                    inputProps={{ "aria-label": "search" }}
                                />
                            </div>
                        </Toolbar>
                    </SeachContainer>
                </SearchContainer>
                <div className={classes1.MuiTabRoot99}>
                    <TabsStyled
                        textColor="primary"
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="off"
                        aria-label="scrollable prevent tabs example"
                        indicatorColor="transparent"

                    >
                     {tabs}
                    </TabsStyled>
                    {tabspanel}
                
                </div>
            </div>
        </ThemeProvider>
    );
}
export default HomePage