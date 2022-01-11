import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [cart, setCart] = useState([
        {
            "id": "CnKdjU6CyKakQDGHzNln",
            "category": "Salgado",
            "price": "1",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
            "name": "Bibsfiha carne",
            "description": "Esfiha deliciosa, receita secreta do Habibs.",
            amount: 1,
          },
    ])

    return(
        <GlobalStateContext.Provider value={[cart, setCart]}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState