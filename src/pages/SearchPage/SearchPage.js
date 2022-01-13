import React,{useContext} from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@material-ui/core"
import theme from "../../constants/theme"
import { ThemeProvider } from '@material-ui/styles';
import InputBase from "@material-ui/core/InputBase";
import {  makeStyles } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { IconButton, CardMedia, Card, CardContent, CardActionArea, Box, Toolbar, AppBar, Typography } from "@material-ui/core";
import styled from "styled-components";
import { Text, TabsStyled, UnderTextCard,  ContainerCardUnderText, SeachContainer, DivStyled } from "./styled";
import ImageCard from '../../assests/image.png'
import GlobalStateContext from "../../contexts/GlobalStateContext";

const useStyles1 = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    }
}));



const useStylesCard= makeStyles({
    root:{
        maxWidth: 368,
        marginBottom:12,
    },
    media: {
        height: 113,
    },
    content:{
        height:36
    },
    text:{
        marginBottom:0
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




const SeachPage = () => {
    const navigate = useNavigate()
    const classes = useStyles();
    const classes1 = useStyles1();
    const classes2=useStylesCard()
    const [valueBottom, setValueBottom] = React.useState(0);
    const [value, setValue] = React.useState("");
    const [loading, setLoading] = React.useState(true)
    const {states,setters,requests}= useContext(GlobalStateContext)
    const restaurant=[ {
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
    }]


    const handleChange = (event, newValue) => {
      
        setValue(event.target.value)
        console.log(event.target.value.length)
        if(event.target.value.length==0  ){
            setLoading(true)
        }
        
        setTimeout(()=>setLoading(false),1.0*1000)
       
    };


    const cardFilter= restaurant.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(value.toLowerCase()) 
      })
 

     const card=cardFilter.map((restaurant)=>{
        
         return ( 
         <Card className={classes2.root}>
            <CardActionArea>
                <CardMedia
                    className={classes2.media}
                    image={restaurant.logoUrl}
                    title={restaurant.name}
                />
                <CardContent className={classes2.content}>
                    <Typography className={classes2.text} gutterBottom variant="body2" color="primary">
                   {  restaurant.name}
                    </Typography>
                    < ContainerCardUnderText className={classes2.text} gutterBottom variant="body2" color="primary">     
                    <UnderTextCard gutterBottom variant="caption" color="initial" >
                   {restaurant.deliveryTime}
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
                <SearchContainer>
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
                </SearchContainer>
               <DivStyled>
                {value === ""? 
                <p> Busque por nome de restaurante</p>: 
                 loading? 
                  <p>Carregando...</p>
                 :                       
                  cardFilter.length? card: <p> Não encontramos :(</p> }
                  </DivStyled>
                </div>
                </ThemeProvider>
    )}
    export default SeachPage