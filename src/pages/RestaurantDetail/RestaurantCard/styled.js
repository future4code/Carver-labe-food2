import styled from "styled-components";

export const CardRestaurantContainer = styled.div`
    margin-top: 17px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    img {
        height: 120px;
        width: 100%;
        object-fit: cover;
        border-radius: 8px 8px 0px 0px;
    }
`

export const InfosCard = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    width: 90%;
`

export const Title = styled.span`
    color: #5cb646;
    margin-bottom: 8px;
`

export const Desc = styled.span`
    color: #b8b8b8;
    margin-bottom: 8px;
`

export const DescInline = styled.span`
    margin-bottom: 8px;
    span {
        margin-right: 44px;
    }
`