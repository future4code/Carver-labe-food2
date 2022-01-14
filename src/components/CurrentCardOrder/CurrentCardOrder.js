import React from 'react'
import { CurrentCardOrderContainer, CurrentOrderInformation, OrderItenTitle, OrderTotal } from './CurrentCardOrder.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';


export default function CurrentCardOrder({order}) {
    console.log(order)
    return (
        <CurrentCardOrderContainer>
            <QueryBuilderIcon />
            <CurrentOrderInformation>
                <h3>Pedido em andamento</h3>
                <OrderItenTitle>{order.restaurantName}</OrderItenTitle>
                <OrderTotal>subtotal R${parseFloat(order.totalPrice).toFixed(2).toString().replace(".", ",")}</OrderTotal>
            </CurrentOrderInformation>
        </CurrentCardOrderContainer>
    )
}
