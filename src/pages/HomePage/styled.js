import styled from "styled-components";
import { Tab, Tabs, Typography, AppBar, TabPanel } from "@material-ui/core";

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
export const PanelArea=styled.div`
    max-width:100%;
    
    @media screen and (min-device-width : 1200px) {
       p{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
       }
      
    }
        
`