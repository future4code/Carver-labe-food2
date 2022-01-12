import React, { useContext, useState } from "react";
import * as C from "./styled";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import GlobalStateContext from "../../../contexts/GlobalStateContext";

const ProductCard = ({photo, id, name, description, price, amount}) => {
    const [cart, setCart] = useContext(GlobalStateContext)
    const [open, setOpen] = useState(false);

    const addCart = () => {
        setOpen(true);
    }

    const removeItem = () => {
        const position = cart.findIndex((item) => {
            return item.id === id;
        });

        let newCart = [...cart];

        if (newCart[position].amount === 1) {
            newCart.splice(position, 1);
        } else {
            newCart[position].amount -= 1;
        }

        setCart(newCart);
    };
    

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
                    <C.ButtonCart color={"red"} onClick={removeItem}>remover</C.ButtonCart>
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