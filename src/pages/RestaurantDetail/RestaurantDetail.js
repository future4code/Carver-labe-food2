import React, { useContext } from "react";
import * as C from "./styled";
import HeaderRestaurant from "../RestaurantDetail/HeaderRestaurant/HeaderRestaurant";
import RestaurantCard from "./RestaurantCard/RestaurantCard";
import TitleProductCard from "./TitleProductCard/TitleProductCard";
import ProductCard from "./ProductCard/ProductCard";
import { products } from "./products";

const RestaurantDetail = () => {
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
                array.push(<ProductCard key={Math.random()} product={item} />);
            });
        }
        return array;
    }

    return (
        <C.Container>
            <HeaderRestaurant /> 
            <C.Content>
                <C.Main>
                <RestaurantCard />
                    {listProducts()}
                </C.Main>
            </C.Content>
        </C.Container>
    )
}

export default RestaurantDetail;