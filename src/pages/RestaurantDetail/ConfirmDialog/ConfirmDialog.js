import React, { useState, useContext } from 'react';
import * as C from "./styled";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import GlobalStateContext from '../../../contexts/GlobalStateContext';

const ConfirmDialog = (props) => {
    const [amount, setAmount] = useState(0);
    const { states, setters, requests } = useContext(GlobalStateContext)

    const onChange = (e) => {
        setAmount(e.target.value);
    }

    const handleClose = () => {
        props.setOpen(false);
        console.log(amount);
    };

    const item = props.product;
    const addItem = () => {
        setters.setRestaurant(props.product.restaurant)
        const index = states.cart.findIndex((i) => i.id === props.product.id);
        const newCart = [...states.cart];
        if (index === -1) {
            const cartItem = { ...item, amount: Number(amount) };
            newCart.push(cartItem);
            setters.setCart(newCart);
        } else {
            newCart[index].amount += Number(amount);
            setters.setCart(newCart);
        }
    };

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