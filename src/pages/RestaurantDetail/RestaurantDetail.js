import React, { useContext, useEffect } from "react";
import * as C from "./styled";
import HeaderRestaurant from "../RestaurantDetail/HeaderRestaurant/HeaderRestaurant";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import TitleProductCard from "./TitleProductCard/TitleProductCard";
import ProductCard from "./ProductCard/ProductCard";
<<<<<<< HEAD
import Header from "../../components/header/Header";
=======
import { products } from "./products";
import GlobalStateContext from "../../contexts/GlobalStateContext";
>>>>>>> e98fd506c59030e9bfa447e6b180a503d21e71e2

const RestaurantDetail = () => {
    const [cart, setCart] = useContext(GlobalStateContext);

    useEffect(() => {
      
    }, [cart]);

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

     let organizedProducts = [];
    products && products.restaurant.products.map((item) => {
        if (organizedProducts.findIndex((category) => category.name === item.category) === -1) {
            organizedProducts = [...organizedProducts, {
                "name": item.category,
                "products": [item]
            }]
        }
        else {
            const categoryId = organizedProducts.findIndex((category) => item.category === category.name);
            organizedProducts[categoryId].products.push(item);
        }
    });

    const listProducts = () => {
        const array = [];
        for (let i = 0; i < organizedProducts.length; i++) {
            array.push(<TitleProductCard key={Math.random()} title={organizedProducts[i].name} />);
            organizedProducts[i].products.map((item, id) => {
                array.push(<ProductCard key={Math.random()} photo={item.photoUrl} id={item.id} name={item.name} description={item.description} price={(Number(item.price.replace(",", "."))).toFixed(2).replace(".", ",")} amount={"request"} restaurant={restaurants} />);
            });
        }
        return array;
    }

    return (
<<<<<<< HEAD
        <C.Container >
            {/* <HeaderRestaurant /> */}
            <Header
            // id={mapId} 
            />
=======
        <C.Container>
            <HeaderRestaurant />
>>>>>>> e98fd506c59030e9bfa447e6b180a503d21e71e2
            <C.Content>
                <C.Main>
                    <RestaurantCard restaurants={restaurants}/>
                    {listProducts()}
                </C.Main>
            </C.Content>
        </C.Container>
    )
}

export default RestaurantDetail;