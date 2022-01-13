import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@material-ui/core"
import theme from "../../constants/theme"
import { ThemeProvider } from '@material-ui/styles';
import InputBase from "@material-ui/core/InputBase";
import {  makeStyles } from '@material-ui/core/styles';
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
import { Text, TabsStyled, UnderTextCard,  ContainerCardUnderText, SeachContainer } from "./styled";
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
    const classes1 = useStyles1();
    const classes2 = useStylesScrollableTabs();
    const classes3 = useStylesBottomNavigation();
    const classes4 = useStylesCard()
    const [valueBottom, setValueBottom] = React.useState(0);
    const [value, setValue] = React.useState(0);
 
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                <div className={classes2.MuiTabRoot99}>
                    <TabsStyled
                        textColor="primary"
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="off"
                        aria-label="scrollable prevent tabs example"
                        indicatorColor="transparent"

                    >
                        <Text label="Burgue" {...a11yProps(0)} />
                        <Text label="Asiática" {...a11yProps(1)} />
                        <Text label="Massas" {...a11yProps(2)} />
                        <Text label="Saudável" {...a11yProps(3)} />
                    </TabsStyled>

                    <TabPanel value={value} index={0}>
                    <Card className={classes4.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes4.media}
                            image={ImageCard}
                            title="Contemplative Reptile"
                        />
                        <CardContent className={classes4.content}>
                            <Typography className={classes4.text} gutterBottom variant="body2" color="primary">
                            Vinil Butantã
                            </Typography>
                            < ContainerCardUnderText className={classes4.text} gutterBottom variant="body2" color="primary">     
                            <UnderTextCard gutterBottom variant="caption" color="initial" >
                           
                            60 min
                            </UnderTextCard>
                            <UnderTextCard gutterBottom variant="caption" color="initial" >
                             frete R$: 3,00
                            </UnderTextCard>
                            </ ContainerCardUnderText>
                        </CardContent>
                    </CardActionArea>
                </Card>
                    <Card className={classes4.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes4.media}
                            image='https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg'
                            title="Contemplative Reptile"
                        />
                        <CardContent className={classes4.content}>
                            <Typography className={classes4.text} gutterBottom variant="body2" color="primary">
                            Bibsfiha carne
                            </Typography>
                            < ContainerCardUnderText className={classes4.text} gutterBottom variant="body2" color="primary">       
                            <UnderTextCard gutterBottom variant="caption" color="initial" >
                            60 min
                            </UnderTextCard>
                            <UnderTextCard gutterBottom variant="caption" color="initial" >
                             frete R$: 1,00
                            </UnderTextCard>
                            </ ContainerCardUnderText>
                        </CardContent>
                    </CardActionArea>
                </Card>
                   
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                </div>

                {/* <AppBar position="fixed" color="transparent" className={classes.appBar}>
                    <Toolbar>
                        <BottomNavigation
                            value={valueBottom}
                            onChange={(event, newValue) => {
                            setValueBottom(newValue);
                            }}
                            showLabels
                            className={classes3.root}
                        >
                            <BottomNavigationAction
                                
                                icon={<HomeOutlinedIcon fontSize="large" />} />

                            <BottomNavigationAction
                                
                                icon={<ShoppingCartOutlinedIcon fontSize="large" />}
                            />
                            <BottomNavigationAction

                                icon={<PersonOutlineOutlinedIcon fontSize="large" />}
                            />
                        </BottomNavigation>
                    </Toolbar>
                </AppBar> */}
                {/* <Footer /> */}
            </div>
        </ThemeProvider>
    );
}
export default HomePage