import styled from "styled-components";

export const ContainerPai = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InfoCart = styled.div`
    min-height: 85vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 76px;
    width: 100%;
    padding: 16px;
    background-color: #eee;
`

export const AddressUser = styled.p`
    font-size: 16px;
    color: #b8b8b8;
`
export const EmptyCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 83px;
`


export const Cart = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px 16px 16px 16px;
    height: auto;
`

export const InfoRestaurant = styled.div`
    height: 94px;
    padding: 16px 0 8px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span{
        color: #5cb646;
    }

    p{
        color: #b8b8b8;
    }
    
`

export const ContainerProducts = styled.div`
    padding: 8px 0;
    
`
export const Info = styled.div`
    width: 328px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    margin-bottom: 10px;
`

export const Price = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    span{
        color: #5cb646;
        font-weight: bold;
        font-size: 18px;
    }
`

export const Payment = styled.div`
    /* height: 89px; */
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    p{
        border-bottom: 1px solid black;
        padding: 5px;
        margin-bottom: 10px;
    }

    form{
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    input{
        margin-right: 10px;
    }

    label{
        margin: 5px 0;
    }

`

export const Button = styled.button`
    height: 42px;
    border-radius: 2px;
    background-color: #5cb646;
    font-weight: bold;
    width: 90vw;
    margin-bottom: 1vh;
`

