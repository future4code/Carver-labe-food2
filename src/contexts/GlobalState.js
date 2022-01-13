import React, { useState, useEffect } from "react";
import { addAdress, getProfile, login, signUp, updateProfile } from "../services/services";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

    const [restaurant, setRestaurant] = useState({
        "id": "1",
        "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
        "shipping": 6,
        "address": "Rua das Margaridas, 110 - Jardim das Flores",
        "name": "Habibs",
        "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
        "deliveryTime": 60,
        "category": "Árabe"
    })
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    const [user, setUser] = useState([])
    const [addressUser, setAddressUser] = useState({})

    useEffect(() => {
       localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

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

    const states = { restaurant, cart, user, addressUser }
    const setters = { setRestaurant, setCart, setUser, setAddressUser }
    const requests = { requestSignup, putAdress, requestLogin, requestUpdateProfile }



    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState