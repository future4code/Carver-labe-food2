import styled from "styled-components";
import { Button } from "@material-ui/core"

export const ProfilePageContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; 

`

export const PersonalInformationProfileArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px;

    width: 91vw;

    h5{
        margin: 0;
        margin-bottom: 8px;
        font-size: 16px;
        padding: 0 16px;
        font-weight: normal;
    }
`
export const ButtonContainer = styled.div`
    position: absolute;
    right: 16px;
`
export const GrayText = styled.div`
    letter-spacing: -0.39px;
    color: #b8b8b8; 
    margin: 0;
    margin-bottom: 8px;
    font-size: 16px;
    padding: 0 16px;
`

export const AdressInformation = styled(PersonalInformationProfileArea)`
    background-color: #eee;
`

export const OrderHistoryArea = styled.div`
    padding: 16px;
    width: 91vw;

    h5{
        margin: 0 0 8px;
        font-size: 16px;
        letter-spacing: -0.39px;
        color: #000000;
        font-weight: normal;
        
    }
`
export const OrderHistoryContainer = styled.div`
    padding: 16px;
`

export const Line = styled.div`
    margin-bottom: 8px;
    border-bottom: 1px solid  black;
`

export const OrderHistoryCard = styled.div`
    padding: 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    margin-bottom: 8px;
`

export const OrderDate = styled.h6`
    font-size: 12px;
    font-weight: normal;
    letter-spacing: -0.29px;
    color: #000000;
    margin: 0 0 9px;

`
export const OrderHistoryTitleCard = styled.h6`
    margin: 0 0 9px;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: -0.39px;
    color: #5cb646;
`

export const OrderTotalCost = styled.h6`
    margin: 7px 0 0;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.39px;
`

export const Footer1 = styled.div`
    height: 49px;
    width: 100%;
    /* background-color: black; */
    bottom: 0;
`