import React, { useState, useContext } from 'react';
import * as C from "./styled";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import GlobalStateContext from '../../contexts/GlobalStateContext';
import { notify } from '../../constants/notify';

const ConfirmDialog = (props) => {
    const [quantify, setQuantify] = useState(0);
    const { states, setters } = useContext(GlobalStateContext)

    const onChange = (e) => {
        setQuantify(e.target.value);
    }

    const handleClose = () => {
        props.setOpen(false);
    }

    const item = props.product;

    const addItem = () => {
        const index = states.cart.findIndex((i) => i.id === props.product.id);
        if (states.cart.length > 0 && states.cart[0].restaurant.name !== item.restaurant.name) {
            notify("warning", "Finalize o pedido de um restaurante antes de solicitar de outro!");
        } else {
            const newCart = [...states.cart];
            if (index === -1) {

                const cartItem = { ...item, quantify: Number(quantify) };
                newCart.push(cartItem);
                setters.setCart(newCart);

            } else {
                newCart[index].quantify += Number(quantify);
                setters.setCart(newCart);
            }
        }
    }

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose} maxWidth="lg">
                <C.DialogTitle>Selecione a quantidade desejeda</C.DialogTitle>
                <DialogContent>
                    <C.ContainerSelect>
                        <C.Select onChange={onChange}>
                            <option value={1}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </C.Select>
                    </C.ContainerSelect>
                </DialogContent>
                <DialogActions>
                    <Button onClick={addItem} color="primary">
                        ADICIONAR AO CARRINHO
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ConfirmDialog;