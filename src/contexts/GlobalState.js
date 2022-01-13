import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [restaurant, setRestaurant] = useState([ {
        "id": "1",
        "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
        "shipping": 6,
        "address": "Rua das Margaridas, 110 - Jardim das Flores",
        "name": "Habibs",
        "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
        "deliveryTime": 60,
        "category": "Árabe"
      },{
        "id": "10",
        "description": "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Ftadashii.png?alt=media&token=0e4b9b8c-3b6e-4a78-bd49-d3576657a342",
        "deliveryTime": 50,
        "category": "Asiática",
        "shipping": 13,
        "address": "Travessa Reginaldo Pereira, 130 - Ibitinga",
        "name": "Tadashii"
    },
    {
        "id": "2",
        "address": "Avenida dos Papagaios, 1350 - Sta. Efigênia",
        "description": "McDonald's Corporation é a maior cadeia mundial de restaurantes de fast food de hambúrguer, servindo cerca de 68 milhões de clientes por dia em 119 países através de 37 mil pontos de venda.",
        "shipping": 19,
        "deliveryTime": 15,
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fmcdonalds.png?alt=media&token=87a0fc52-3b8d-4475-b3e4-6ff730356121",
        "category": "Hamburguer",
        "name": "McDonalds"
    },
    {
        "id": "3",
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fcantinamammaperrotta.jpg?alt=media&token=3a4e76b6-3d07-414b-8672-e624f5a10a76",
        "category": "Italiana",
        "address": "Rua Barão do Rio Branco, 98 - Centro",
        "deliveryTime": 20,
        "description": "Restaurante Self Service e lanchonete localizado no Laboratório Nacional de Computação Científica",
        "shipping": 2,
        "name": "Cantina Mamma Perrotta"
    },
    {
        "id": "4",
        "address": "Travessa Junqueira de Melo, 315 - Marginal",
        "name": "Sorveteria Bacio di Latte",
        "shipping": 10,
        "deliveryTime": 45,
        "description": "Gelatos de raízes italianas feitos artesanalmente e com ingredientes de altíssima qualidade. Confira todos os nossos deliciosos sabores!",
        "category": "Sorvetes",
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fbaciodilatte.png?alt=media&token=03839175-d9b3-4024-a516-5ce2cbfc6f30"
    },
    {
        "id": "5",
        "shipping": 18,
        "category": "Carnes",
        "description": "Inaugurado em 1988 nos Estados Unidos e chegou ao Brasil 9 anos depois. Hoje, o restaurante marca presença em 20 cidades em todo o país, com um estilo casual que vai fazer você se sentir no Outback Australiano",
        "name": "Outback Steakhouse",
        "address": "Alameda dos Marsupiais, 505 - Humaitá",
        "deliveryTime": 20,
        "logoUrl": "https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Foutback.png?alt=media&token=6c3af525-e6f5-4f96-b5d5-a0ad6702a838"
    }]);
console.log(restaurant)
    const [cart, setCart] = useState([]);

    return(
        <GlobalStateContext.Provider value={[cart, setCart, restaurant, setRestaurant]}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState