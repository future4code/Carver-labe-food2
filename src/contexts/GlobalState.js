import React, { useState } from "react";
import { addAdress, login, signUp, updateProfile } from "../services/services";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [restaurant, setRestaurant] = useState({});
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState([])

    const requestSignup = (body,navigate,setLoading) => {
        signUp(body, setUser,navigate,setLoading)
        
    }

    const putAdress = (body,setLoading,navigate) =>{
        addAdress(body, setLoading, setUser,navigate)
    }

    const requestLogin = (body, navigate, setLoading) => {
        login(body,navigate, setLoading, setUser)
    }

    const requestUpdateProfile = (body, setLoading,navigate) =>{
        updateProfile(body, setLoading,navigate,setUser)
    }
    
    const states = {restaurant, cart ,user}
    const setters = {setRestaurant, setCart, setUser}
    const requests = {requestSignup,putAdress,requestLogin,requestUpdateProfile}


    return(
        <GlobalStateContext.Provider value={{states,setters,requests}}>
            {props.children}
        </GlobalStateContext.Provider>
        // <GlobalStateContext.Provider value={[cart, setCart, restaurant, setRestaurant, user, setUser]}>
        //     {props.children}
        // </GlobalStateContext.Provider>
    )
}

export default GlobalState