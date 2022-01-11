import styled from "styled-components";
import { Tab,Tabs  } from "@material-ui/core";

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

export const Text=styled(Tab)` 
text-transform: none;
`
export const TabsStyled=styled(Tabs)` 

div{
    width:100%;
    display:flex;
   
}
`