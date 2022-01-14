import styled from "styled-components";

export const CurrentCardOrderContainer = styled.div`
    width: 100vw;
    height: 95px;
    padding: 24px;
    background-color: #5cb646;
    position: absolute;
    bottom: 11vh;
    z-index: 2100;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const CurrentOrderInformation = styled.div`
    display:flex;
    flex-direction: column;
    width: 90%;

    h3{
        margin: 0;
        margin-bottom: 8px;
        color: white;font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        letter-spacing: -0.39px;
        color: #fff;
    }
`

export const OrderItenTitle = styled.p`
    margin: 0;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: -0.39px;
    color: black;
`

export const OrderTotal = styled.p`
    margin: 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.39px;
    text-transform: uppercase;
`