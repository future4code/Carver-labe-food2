import styled from "styled-components";
import { Typography, AppBar } from "@material-ui/core";

export const UnderTextCard = styled(Typography)` 
    color:#b8b8b8;
`
export const ContainerCardUnderText = styled.div` 
    display:flex;
    justify-content: space-between;
`
export const SeachContainer = styled(AppBar)` 
    box-shadow:none;
    border: 1px solid #b8b8b8;
`
export const DivStyled = styled.div` 
    width:100%;
    display:flex;
    padding:0;
    flex-direction: column;
    align-items: center;

    div{

    width:90%;

        button{
            div{
                width:100%
            }
        }
    }
    
`
export const SeachContainer1 = styled.div`
  margin: 12px 12px 16px 16px;

`;

export const CardContainer=styled.div`
@media screen and (min-device-width : 481px) and (max-device-width : 800px) {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    }
    
    @media screen and (min-device-width : 1024px) {
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
    
    }
`
