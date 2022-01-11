import styled from "styled-components";

var blackDesigned = `0, 0, 0, 0.25`;

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 64px;
    background-color: #fff;

    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(${blackDesigned})
`

export const HeaderTitleArea = styled.div`
    width: 175px;
    height: 44px;
    margin: 20px 92px 0 93px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const HeaderTitle = styled.span`
    width: 68px;
    height: 19px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
`