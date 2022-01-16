import styled from "styled-components";
import { Tab, Tabs, Typography, AppBar } from "@material-ui/core";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    header{
        width: 100%;
        background-color: white;
    }
    p{
        font-weight: bold;
    }
    img{
        width: 104px;
        height: 58px;
        margin: 68px 128px 16px;
    }
    form{
        text-align: center;

    }
`

export const Text = styled(Tab)` 
    text-transform: none;
`
export const TabsStyled = styled(Tabs)` 

    div{
        width:100%;
        display:flex;
        padding:0;
    
    }
`
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

export const SearchContainer1 = styled.div`
  margin: 12px 12px 16px 16px;
`