import React from "react";
import * as C from "./styled";

const RestaurantCard = ({ rest }) => {
    return (
        <C.CardRestaurantContainer>
            {rest && <>
                <img src={rest.logoUrl} alt={rest.name} />
                <C.InfosCard>
                    <C.Title>{rest.name}</C.Title>
                    <C.Desc>{rest.category}</C.Desc>
                    <C.DescInline>
                        <C.Desc>{rest.deliveryTime} - {rest.deliveryTime + 10} min</C.Desc>
                        <C.Desc>Frete R$ {rest.shipping.toFixed(2).replace(".", ",")}</C.Desc>
                    </C.DescInline>
                    <C.Desc>{rest.address}</C.Desc>
                </C.InfosCard>
            </>
            }
        </C.CardRestaurantContainer>
    )
}

export default RestaurantCard;