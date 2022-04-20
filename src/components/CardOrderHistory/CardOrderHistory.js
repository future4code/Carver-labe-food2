import React from "react";
import { OrderHistoryCard, OrderHistoryTitleCard, OrderDate, OrderTotalCost } from "./styled"

export default function CardOrderHistory({ order }) {

  const formatDate = () => {
    var arrayMes = new Array();
    arrayMes[0] = "Janeiro";
    arrayMes[1] = "Fevereiro";
    arrayMes[2] = "Março";
    arrayMes[3] = "Abril";
    arrayMes[4] = "Maio";
    arrayMes[5] = "Junho";
    arrayMes[6] = "Julho";
    arrayMes[7] = "Agosto";
    arrayMes[8] = "Setembro";
    arrayMes[9] = "Outubro";
    arrayMes[10] = "Novembro";
    arrayMes[11] = "Dezembro";
    const date = new Date(order.createdAt)
    return (`${date.getDate()} ${arrayMes[date.getUTCMonth()]} ${date.getFullYear()}`)
  }

  return (
    <OrderHistoryCard>
      <OrderHistoryTitleCard>{order.restaurantName}</OrderHistoryTitleCard>
      <OrderDate>{formatDate()}</OrderDate>
      <OrderTotalCost>Total R${parseFloat(order.totalPrice).toFixed(2).toString().replace(".", ",")}</OrderTotalCost>
    </OrderHistoryCard>
  );
}
