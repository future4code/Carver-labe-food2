import styled from "styled-components";

export const CardProductContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border: 1px solid #b8b8b8;
    border-radius: 10px;
    position: relative;
    margin-bottom: 10px;

    img {
        width: 96px;
        height: 112px;
        border-radius: 8px 0px 0px 8px;
        object-fit: cover;
    }
`

export const InfosContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 112px;
    margin-left: 12px;
`

export const TitleInfo = styled.span`
    color: #5cb646;
`

export const DescInfo = styled.span`
    color: #b8b8b8;
    font-size: 12px;
    margin: 5px 0px 8px;
    height: 30px;
`
export const DescPrice = styled.span`
    color: black;
`

export const ButtonCart = styled.button`
    border: 1px solid ${props => props.color};
    color: ${props => props.color};
    background-color: white;
    height: 31px;
    width: 90px;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 9px 0px;
    cursor: pointer;
`

export const AmountCart = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${props => props.color};
    color: ${props => props.color};
    background-color: white;
    height: 33px;
    width: 33px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0px 9px;
    cursor: pointer;
`