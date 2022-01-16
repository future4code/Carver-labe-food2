import React, { useState, useContext } from "react";
import * as C from "./styled";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import GlobalStateContext from "../../contexts/GlobalStateContext";

const ProductCard = ({ photo, id, name, description, price, quantify, restaurant }) => {
    const { states, setters } = useContext(GlobalStateContext)
    const [open, setOpen] = useState(false);
    const product = { photo, id, name, description, price, quantify, restaurant }

    const addCart = () => {
        setOpen(true);
    }

    if (quantify === "request") {
        const index = states.cart.findIndex((item) => item.name === name);
        if (index !== -1) {
            quantify = states.cart[index].quantify;
        }
    }

    const removeItem = () => {
        const position = states.cart.findIndex((item) => {
            return item.id === id;
        });

        let newCart = [...states.cart];

        if (newCart[position].quantify === 1) {
            newCart.splice(position, 1);
        } else {
            newCart[position].quantify -= 1;
        }

        setters.setCart(newCart);
    };

    return (
        <C.CardProductContainer>
            <img src={photo} alt={name} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://www.bodoquena.tur.br/files/icone-lanche_ecf6496d.png";
            }} />
            <C.InfosContainer>
                <C.TitleInfo>{name}</C.TitleInfo>
                <C.DescInfo>{description}</C.DescInfo>
                <C.DescPrice>R$ {price} </C.DescPrice>
            </C.InfosContainer>
            {quantify > 0 ?
                <>
                    <C.AmountCart color={"green"}>{quantify}</C.AmountCart>
                    <C.ButtonCart color={"red"} onClick={removeItem}>remover</C.ButtonCart>
                </>
                :
                <>
                    <C.ButtonCart color={"green"} onClick={addCart}>adicionar</C.ButtonCart>
                </>
            }
            {open === true && <ConfirmDialog open={open} setOpen={setOpen} product={product} />}
        </C.CardProductContainer >
    )
}

export default ProductCard;