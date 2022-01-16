import React from "react"
import error from '../../assets/error.png'
import { Container } from "./styled"

const ErrorPage = () => {
    return (
        <Container>
            <img src={error} alt="imagem de error 404 - página não encontrada" />
        </Container>
    )
}

export default ErrorPage