import React, { useState, useEffect } from "react";
import { addAdress, login, signUp, updateProfile } from "../services/services";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || [])
    const [addressUser, setAddressUser] = useState({})

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("user", JSON.stringify(user))
    }, [cart, user]);

    const requestSignup = (body, navigate, setLoading) => {
        signUp(body, setUser, navigate, setLoading)
    }

    const putAdress = (body, setLoading, navigate) => {
        addAdress(body, setLoading, setUser, navigate)
    }

    const requestLogin = (body, navigate, setLoading) => {
        login(body, navigate, setLoading, setUser)
    }

    const requestUpdateProfile = (body, setLoading, navigate) => {
        updateProfile(body, setLoading, navigate, setUser)
    }

    const states = { cart, user, addressUser }
    const setters = { setCart, setUser, setAddressUser }
    const requests = { requestSignup, putAdress, requestLogin, requestUpdateProfile }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState