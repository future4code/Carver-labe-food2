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

    const [cart, setCart] = useState([ {
        "id": "CnKdjU6CyKakQDGHzNln",
        "category": "Salgado",
        "price": "1",
        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
        "name": "Bibsfiha carne",
        "description": "Esfiha deliciosa, receita secreta do Habibs.",
        amount: 1
      },
      {
        "id": "KJqMl2DxeShkSBevKVre",
        "photoUrl": "https://www.sushimanscwb.com.br/wp-content/uploads/2018/10/1579_REFRIGERANTE_LATA_-_350ml_17d2e336feb44a2696fd6cf852c41b50-1.jpeg",
        "name": "Refrigerante",
        "description": "Coca cola, Sprite ou Guaraná",
        "category": "Bebida",
        "price": "4",
        amount: 4
      },
      {
        "id": "KJqMl2DxeShkSBevKVre",
        "photoUrl": "https://www.sushimanscwb.com.br/wp-content/uploads/2018/10/1579_REFRIGERANTE_LATA_-_350ml_17d2e336feb44a2696fd6cf852c41b50-1.jpeg",
        "name": "Refrigerante",
        "description": "Coca cola, Sprite ou Guaraná",
        "category": "Bebida",
        "price": "4",
        amount: 4
      }]);

    return(
        <GlobalStateContext.Provider value={[cart, setCart, restaurant, setRestaurant]}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState