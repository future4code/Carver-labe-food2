import React from "react";
import ImageCentral from "../../../assets/RestaurantDetail/image.png";
import * as C from "./styled";

const RestaurantCard = () => {
    const restaurants = {
          "id": "1",
          "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
          "shipping": 6,
          "address": "Rua das Margaridas, 110 - Jardim das Flores",
          "name": "Habibs",
          "logoUrl": "https://istoe.com.br/wp-content/uploads/sites/14/2018/04/habibs.jpg",
          "deliveryTime": 60,
          "category": "Árabe"
        }

    return (
        <C.CardRestaurantContainer>
                <img src={restaurants.logoUrl} alt="Capa" />
                <C.InfosCard>
                    <C.Title>{restaurants.name}</C.Title>
                    <C.Desc>{restaurants.category}</C.Desc>
                    <C.DescInline>
                        <C.Desc>{`${restaurants.deliveryTime} - ${restaurants.deliveryTime + 10} min`}</C.Desc>
                        <C.Desc>Frete R$ {restaurants.shipping.toFixed(2).replace(".", ",")}</C.Desc>
                    </C.DescInline>
                    <C.Desc>{restaurants.address}</C.Desc>
                </C.InfosCard>
        </C.CardRestaurantContainer>
    )
}

export default RestaurantCard;