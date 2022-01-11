import React from 'react'
import { ContainerPai, Cabecalho, AddressContainer, AddressUser, Cart, InfoRestaurant, ContainerProducts, CardProduto, Info, Price, Footer, Payment, Button } from './styled'

const CartPage = () => {
    return (
        <ContainerPai>
            <Cabecalho />

            <AddressContainer>
                <AddressUser>Endereço de entrega</AddressUser>
                <p>Rua Alessandra Vieira, 42</p>
            </AddressContainer>

            <Cart>

                <InfoRestaurant>
                    <span> Bullguer Vila Madalena </span>

                    <p>R. Fradique Coutinho, 1136 - Vila Madalena</p>
                    <p> 30 - 45 min </p>
                </InfoRestaurant>

                <ContainerProducts>
                    <CardProduto />
                    <CardProduto />
                </ContainerProducts>

                <Info>
                    <div>Frete R$6,00</div>
                    <Price>
                        <p>SUBTOTAL</p>
                        <span>R$67,00</span>
                    </Price>
                </Info>
                <Payment>
                    <p>Forma de Pagamento</p>
                    <form>
                        <label>
                            <input name="pay" type='radio' />
                            Dinheiro
                        </label>
                    
                        <label>
                            <input name="pay" type='radio' />
                            Cartão de Crédito
                        </label>
                    </form>
                </Payment>
                <Button>
                    Confirmar
                </Button>

            </Cart>

            <Footer />
        </ContainerPai>
    )
}

export default CartPage