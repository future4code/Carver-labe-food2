import React from "react";
import { AppBar, BottomNavigationAction, BottomNavigation } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { goToCart, goToHome, goToProfile } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        top: 'auto',
        bottom: 0,
        padding: 0,
        width: "100%",
    },
});

const Footer = () => {
    const location = useLocation()
    const history = useNavigate()
    const classes = useStyles();
    
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
      <footer>
            {
                location.pathname === "/home" || location.pathname === "/carrinho" || location.pathname === "/perfil" ?
                    <AppBar className={classes.root} position="fixed">
                        <BottomNavigation value={value} onChange={handleChange} showLabels >
                            <BottomNavigationAction icon={<HomeOutlinedIcon fontSize="large" />} onClick={() => goToHome(history)} />
                            <BottomNavigationAction icon={<ShoppingCartOutlinedIcon fontSize="large" />} onClick={() => goToCart(history)} />
                            <BottomNavigationAction icon={<PersonOutlineOutlinedIcon fontSize="large" />} onClick={() => goToProfile(history)} />
                        </BottomNavigation>

                    </AppBar> : <></>
            }

        </footer>

    )
}

export default Footer