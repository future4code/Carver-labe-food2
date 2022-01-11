import React from "react";
import * as C from "./styled";
import ImageBurguer from "../../../assets/ProductCard/mao-santa-burguer-1531851949973-v-2-900-x-506.png"


const ProductCard = (props) => {
    return (
        <C.CardProductContainer>
            <img src={props.product.photoUrl} alt={props.product.name} />
            <C.InfosContainer>
                <C.TitleInfo>{props.product.name}</C.TitleInfo>
                <C.DescInfo>{props.product.description}</C.DescInfo>
                <C.DescPrice>R$ {Number(props.product.price.replace(",", ".")).toFixed(2).replace(".", ",")} </C.DescPrice>
            </C.InfosContainer>
            {props.product.amount > 0 ?
                <>
                    <C.AmountCart color={"green"}>{props.product.amount}</C.AmountCart>
                    <C.ButtonCart color={"red"}>remover</C.ButtonCart>
                </>
                :
                <>
                    <C.ButtonCart color={"green"}>adicionar</C.ButtonCart>
                </>
            }

        </C.CardProductContainer >
    )
}

export default ProductCard;