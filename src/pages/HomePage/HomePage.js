import React from "react"
import { useNavigate } from "react-router-dom"
import theme from "../../constants/theme"
import { ThemeProvider } from '@material-ui/styles';
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import { CardMedia, Card, CardContent, CardActionArea, Box, Toolbar, AppBar, Typography } from "@material-ui/core";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Text, TabsStyled, UnderTextCard, ContainerCardUnderText, SeachContainer } from "./styled";
import { goToSearch, goToRestaurantDetails } from "../../router/coordinator";
import useRequestData from "../../hooks/useRequestData";






const useStylesScrollableTabs = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        textColor: "primary",

    }
}));


const useStylesCard = makeStyles({
    root: {
        maxWidth: 368,
        marginBottom: 12,
    },
    media: {
        height: 113,
    },
    content: {
        height: 64
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
    const restaurant=useRequestData('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants',[])

    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const scrollable = restaurant.restaurants&& restaurant.restaurants.map((restaurant) => {
        return restaurant.category
    })

    const scrollableNotRepeated = restaurant.restaurants&& scrollable.filter(function (el, i) {
        return scrollable.indexOf(el) === i;
    })

 
    let index=0
    const tabs = restaurant.restaurants&& scrollableNotRepeated.map((tab) => {
        index=index+1

        return (
                <Text key={index} label={tab} {...a11yProps(index)} />
        )
        
    })

    const filterRestaurants=(category)=>{
       const filter= restaurant.restaurants&&restaurant.restaurants.filter((rest)=>{
            return rest.category===category
        })
    
        return filter.map((restaurant)=>{
            return(
                <Card key={restaurant.id} onClick={()=> goToRestaurantDetails(navigate,restaurant.id)} className={classes2.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes2.media}
                        image={restaurant.logoUrl}
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

    const tabspanel=restaurant.restaurants&& tabs.map((tabs)=>{
        index2=index2+1
        return ( 
        <TabPanel key={index2} value={value} index={index2}>
            {filterRestaurants(tabs.props.label)}
        </TabPanel>
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
                                    placeholder="Restaurante"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput
                                    }}
                                    inputProps={{ "aria-label": "search" }}
                                    onClick={() => goToSearch(navigate)}
                                />
                            </div>
                        </Toolbar>
                    </SeachContainer>
                </SearchContainer>
                <div >
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