import React, { useState } from "react";
import * as C from "./styled";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";

const ProductCard = (props) => {
    const [open, setOpen] = useState(false);

    const addCart = () => {
        setOpen(true);
    }

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
                    <C.ButtonCart color={"green"} onClick={addCart}>adicionar</C.ButtonCart>
                </>

            }
            {open === true && <ConfirmDialog open={open} setOpen={setOpen} />}
        </C.CardProductContainer >
    )
}

export default ProductCard;