import React, {useState } from 'react';
import * as C from "./styled";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const ConfirmDialog = (props) => {
    const [amount, setAmount] = useState(0);

    const onChange = (e) => {
        setAmount(e.target.value);
    }

    const handleClose = () => {
        props.setOpen(false);
        console.log(amount);
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
                    <Button onClick={handleClose} color="primary">
                        ADICIONAR AO CARRINHO
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ConfirmDialog;