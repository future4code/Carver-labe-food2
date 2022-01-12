import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [restaurant, setRestaurant] = useState( {
        "id": "1",
        "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
        "shipping": 6,
        "address": "Rua das Margaridas, 110 - Jardim das Flores",
        "name": "Habibs",
        "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
        "deliveryTime": 60,
        "category": "Árabe"
      });

    const [cart, setCart] = useState([ ]);

    return(
        <GlobalStateContext.Provider value={[cart, setCart, restaurant, setRestaurant]}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState