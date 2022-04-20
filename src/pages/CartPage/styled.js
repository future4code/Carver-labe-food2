import styled from "styled-components";
import Button from '@material-ui/core/Button';

export const ContainerPai = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InfoCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 85vh;
    width: 100%;
    margin-bottom: 10vh;
`

export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 76px;
    width: 100vw;
    padding: 16px;
    background-color: #eee;
`

export const AddressUser = styled.p`
    font-size: 16px;
    margin-bottom: 5px;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 94px;
    padding: 16px 0 8px 0;
   
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
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    width: 328px;
    height: 60px;
    margin-bottom: 10px;
`

export const Price = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    span{
        color: #5cb646;
        font-weight: bold;
        font-size: 18px;
    }
`

export const Payment = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    p{
        border-bottom: 1px solid black;
        padding: 5px;
        margin-bottom: 10px;
    }

    label{
        margin-bottom: -10px;
    }

`

export const ButtonUI = styled(Button)`
    height: 42px;
    border-radius: 2px;
    background-color: #5cb646;
    width: 90vw;
    margin-bottom: "10px";
`