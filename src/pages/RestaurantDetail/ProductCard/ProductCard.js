import React, { useState } from "react";
import * as C from "./styled";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";

const ProductCard = ({photo, name, description, price, amount}) => {
    
    const [open, setOpen] = useState(false);

    const addCart = () => {
        setOpen(true);
    }

    return (
        <C.CardProductContainer>
            <img src={photo} alt={name} />
            <C.InfosContainer>
                <C.TitleInfo>{name}</C.TitleInfo>
                <C.DescInfo>{description}</C.DescInfo>
                <C.DescPrice>R$ {price} </C.DescPrice>
            </C.InfosContainer>
            {amount > 0 ?
                <>
                    <C.AmountCart color={"green"}>{amount}</C.AmountCart>
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