import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [cart, setCart] = useState([])

    return(
        <GlobalStateContext.Provider value={[cart, setCart]}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState