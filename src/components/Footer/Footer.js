import React, {useState} from "react";
import { AppBar, Toolbar, BottomNavigationAction, BottomNavigation } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from '@material-ui/core/IconButton';
import { goToCart, goToHome, goToProfile } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
// import BottomNavigation from '@material-ui/core/BottomNavigation';
//import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// const useStylesBottomNavigation = makeStyles({
//     root: {
//         width: "100%"
//     },
// });
// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         width: "100%",
//     },
//     appBar: {
//         top: 'auto',
//         bottom: 0,
//         padding: 0,
//         width: "100%",
//     }
// }));
// const useStylesBottomNavigation = makeStyles({
//     root: {
//         width: "100%"
//     },
// });
const useStyles = makeStyles({
    root: {
        top: 'auto',
        bottom: 0,
        padding: 0,
        width: "100%",
    },
});
const Footer = () => {
    const history = useNavigate()
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    //   const handleChange = () => {
    //     if(value === "recents"){
    //         setValue(() => goToHome(history));
    //     }else if (value === "favorites"){
    //         setValue(() => goToCart(history));
    //     }else if (value === "nearby"){
    //         setValue(goToProfile(history))
    //     }
    //   };
    // const classes3 = useStylesBottomNavigation();
    // const [valueBottom, setValueBottom] = React.useState(0);
    // const [value, setValue] = React.useState(0);
    // const onChangeOi = (event: object, value: any) => void
    return (
        // <AppBar position="fixed" color="transparent" className={classes.appBar}>
        //     <Toolbar>
        // <BottomNavigation
        //                     value={valueBottom}
        //                     onChange={(event, newValue) => {
        //                         setValueBottom(newValue);
        //                     }}
        //                     showLabels
        //                     // classNa
        //                     // me={classes3.root}
        //                 >
        //         <BottomNavigationAction
        //             selected={false}
        //             icon={<HomeOutlinedIcon fontSize="large" />}
        //             onClick={() => goToHome(history)}/>
        //         <BottomNavigationAction
        //             selected={false}
        //             icon={<ShoppingCartOutlinedIcon fontSize="large"
        //             onClick={() => goToCart(history)}/>}
        //         />
        //         <BottomNavigationAction
        //             selected={false}
        //             icon={<PersonOutlineOutlinedIcon fontSize="large"
        //             onClick={() => goToProfile(history)}/>}
        //         />
        //          </BottomNavigation>
        // </Toolbar>
        <AppBar position="relative" className={classes.root} position="fixed">
            <BottomNavigation value={value} onChange={handleChange} showLabels >
                <BottomNavigationAction icon={<HomeOutlinedIcon fontSize="large" onClick={() => goToHome(history)} />} />
                <BottomNavigationAction icon={<ShoppingCartOutlinedIcon fontSize="large" onClick={() => goToCart(history)} />} />
                <BottomNavigationAction icon={<PersonOutlineOutlinedIcon fontSize="large" onClick={() => goToProfile(history)} />} />
            </BottomNavigation>
        </AppBar>
    )
}
export default Footer