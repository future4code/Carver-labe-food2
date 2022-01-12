import React from "react";
import ImageCentral from "../../../assets/RestaurantDetail/image.png";
import * as C from "./styled";

const RestaurantCard = ({ restaurants }) => {
    return (
        <C.CardRestaurantContainer>
                <img src={ImageCentral} alt="Capa" />
                <C.InfosCard>
                    <C.Title>Bullguer Vila Madalena</C.Title>
                    <C.Desc>Burguer</C.Desc>
                    <C.DescInline>
                        <C.Desc>50 - 60 min</C.Desc>
                        <C.Desc>Frete R$6,00</C.Desc>
                    </C.DescInline>
                    <C.Desc>R. Fradique Coutinho, 1136 - Vila Madalena</C.Desc>
                </C.InfosCard>
        </C.CardRestaurantContainer>
    )
}

export default RestaurantCard;