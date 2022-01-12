import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [restaurant, setRestaurant] = useState({});
    const [cart, setCart] = useState([]);

    return(
        <GlobalStateContext.Provider value={[cart, setCart, restaurant, setRestaurant]}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState