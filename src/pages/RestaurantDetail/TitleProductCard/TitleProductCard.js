import React from "react";
import * as C from "./styled";

export const TitleProductCard = (props) => {
    return (
        <C.TitleContainer>
            {props.title}
            <div></div>
        </C.TitleContainer>
    )
}

export default TitleProductCard;