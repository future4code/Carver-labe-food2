import React, { useContext, useEffect, useState } from "react";
import * as C from "./styled";
import RestaurantCard from "../../components//RestaurantCard/RestaurantCard";
import TitleProductCard from "../../components//TitleProductCard/TitleProductCard";
import ProductCard from "../../components//ProductCard/ProductCard";
import GlobalStateContext from "../../contexts/GlobalStateContext";
import { useParams } from "react-router-dom";
import { getRestaurantsDetails } from "../../services/services";
import useProtectedPages from "../../hooks/useProtectedPages";

const RestaurantDetail = () => {
    const { states } = useContext(GlobalStateContext)
    const [rest, setRest] = useState("");
    const params = useParams();
    useProtectedPages()

    useEffect(() => {
        getRestaurantsDetails(params.id)
        .then((res) => {
            setRest(res);
        });
    }, [states.cart]);

    let organizedProducts = [];
    rest && rest.restaurant.products.map((item) => {
        if (organizedProducts.findIndex((category) => category.name === item.category) === -1) {
            organizedProducts = [...organizedProducts, {
                name: item.category,
                products: [item]
            }]
        }
        else {
            const categoryId = organizedProducts.findIndex((category) => item.category === category.name);
            organizedProducts[categoryId].products.push(item);
        }
    });

    const listProducts = () => {
            const completeList = [];
            for (let i = 0; i < organizedProducts.length; i++) {
                completeList.push(<TitleProductCard key={Math.random()} title={organizedProducts[i].name} />);
                organizedProducts[i].products.map((item) => {
                    completeList.push(<ProductCard key={Math.random()} photo={item.photoUrl} id={item.id} name={item.name} description={item.description} price={item.price.toFixed(2).replace(".", ",")} quantify={"request"} restaurant={rest.restaurant} />);
                });
            }
            return completeList;
        }

    return (
        <C.Container>
            <C.Content>
                <C.Main>
                    <RestaurantCard rest={rest && rest.restaurant} />
                    {rest && listProducts()}
                </C.Main>
            </C.Content>
        </C.Container>
    )
}

export default RestaurantDetail;