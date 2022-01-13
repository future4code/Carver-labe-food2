import styled from "styled-components";
import { Tab, Tabs, Typography, Toolbar, AppBar  } from "@material-ui/core";


export const UnderTextCard=styled(Typography)` 
 color:#b8b8b8;
`
export const ContainerCardUnderText=styled.div` 
display:flex;
justify-content: space-between;
`
export const SeachContainer= styled(AppBar)` 
box-shadow:none;
border: 1px solid #b8b8b8;
`
export const DivStyled=styled.div` 
    width:100%;
    display:flex;
    padding:0;
    flex-direction: column;
    align-items: center;
    div{
        width:90%;
    }

`