import React from "react";
import * as C from "./styled";
import HeaderRestaurant from "../RestaurantDetail/HeaderRestaurant/HeaderRestaurant";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import TitleProductCard from "./TitleProductCard/TitleProductCard";
import ProductCard from "./ProductCard/ProductCard";
import Header from "../../components/header/Header";

const RestaurantDetail = () => {
    const productsTeste = {
        0: {
            "id": "CnKdjU6CyKakQDGHzNln",
            "category": "Salgado",
            "price": "1",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
            "name": "Bibsfiha carne",
            "description": "Esfiha deliciosa, receita secreta do Habibs.",
            amount: 1,
        },
        1: {
            "id": "dixrjmRJvcBER8pivj9X",
            "name": "Bibsfiha queijo",
            "description": "Esfiha deliciosa, receita secreta do Habibs.",
            "category": "Salgado",
            "price": "1",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
            amount: 0,
        },
        3: {
            "id": "hwTEJXaj2mvR17oUTwm2",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031439_71805445.jpg",
            "name": "Suco",
            "description": "Laranja, Acerola ou Maçã",
            "category": "Bebida",
            "price": "7,90",
            amount: 0,
        }
    }


    return (
        <C.Container >
            {/* <HeaderRestaurant /> */}
            <Header
            // id={mapId} 
            />
            <C.Content>
                <C.Main>
                    <RestaurantCard />
                    <TitleProductCard title={"Principais"} />
                    <ProductCard product={productsTeste[0]} />
                    <ProductCard product={productsTeste[1]} />
                    <TitleProductCard title={"Acompanhamentos"} />
                    <ProductCard product={productsTeste[3]} />
                </C.Main>
            </C.Content>
        </C.Container >
    )
}

export default RestaurantDetail;