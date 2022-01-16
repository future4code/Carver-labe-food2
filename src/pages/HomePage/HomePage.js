import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import theme from "../../constants/theme"
import { ThemeProvider } from '@material-ui/styles';
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import { CardMedia, Card, CardContent, CardActionArea, Box, Toolbar, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { Text, TabsStyled, UnderTextCard, ContainerCardUnderText, SeachContainer, SearchContainer1 } from "./styled";
import { goToSearch, goToRestaurantDetails } from "../../router/coordinator";
import useRequestData from "../../hooks/useRequestData";
import { getActiveOrder } from "../../services/services";
import CurrentCardOrder from '../../components/CurrentCardOrder/CurrentCardOrder.js'
import useProtectedPage from '../../hooks/useProtectedPages'

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
        flexGrow: 1,
        position: 'relative',
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
    const location = useLocation()
    const classes = useStyles();
    const classes2 = useStylesCard()
    const [value, setValue] = useState(0);
    const [order, setOrder] = useState(null)
    const restaurant = useRequestData('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants', [])

    useProtectedPage()

    useEffect(() => {
        getActiveOrder(setOrder)
    }, [location.pathname])

    const handleChange = (event, newValue) => {
        setValue(newValue);
       
    };


    const scrollable = restaurant.restaurants && restaurant.restaurants.map((restaurant) => {
        return restaurant.category
    })

    const scrollableNotRepeated = restaurant.restaurants && scrollable.filter(function (el, i) {
        return scrollable.indexOf(el) === i;
    })


    let index = 0
    const tabs = restaurant.restaurants && scrollableNotRepeated.map((tab) => {
        index = index + 1

        return (
            <Text key={index} label={tab} {...a11yProps(index)} />
        )

    })

    const filterRestaurants = (category) => {
        const filter = restaurant.restaurants && restaurant.restaurants.filter((rest) => {
            return rest.category === category
        })

        return filter.map((restaurant) => {
            return (
                <Card key={restaurant.id} onClick={() => goToRestaurantDetails(navigate, restaurant.id)} className={classes2.root}>
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

    let index2 = -1

    const tabspanel = restaurant.restaurants && tabs.map((tabs) => {
        index2 = index2 + 1
        return (
            <TabPanel key={index2} value={value} index={index2}>
                {filterRestaurants(tabs.props.label)}
            </TabPanel>
        )
    })

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <SearchContainer1>
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
                </SearchContainer1>
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
            {
                order === null
                    ? <></>
                    : <CurrentCardOrder order={order} />

            }
        </ThemeProvider>
    );
}
export default HomePage