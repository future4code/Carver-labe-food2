import styled from "styled-components";

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

export const AddressInformation = styled(PersonalInformationProfileArea)`
    background-color: #eee;
`

export const OrderHistoryArea = styled.div`
    padding: 16px;
    width: 91vw;
    margin-bottom: 12vw;

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

export const BotaoLogout = styled.div`
    position: relative;
    margin-left: 30vw;
`
