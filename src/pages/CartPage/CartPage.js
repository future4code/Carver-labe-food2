import React, { useState } from 'react'
import { ContainerPai, Cabecalho, AddressContainer, AddressUser, Cart, InfoRestaurant, ContainerProducts, CardProduto, Info, Price, Footer, Payment, Button } from './styled'
import ProductCard from '../RestaurantDetail/ProductCard/ProductCard'

const CartPage = () => {
    const [restaurant, setRestaurant] = useState({
        "id": "1",
        "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
        "shipping": 6,
        "address": "Rua das Margaridas, 110 - Jardim das Flores",
        "name": "Habibs",
        "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
        "deliveryTime": 60,
        "category": "Árabe"
    })

    const [products, setProducts] = useState([
        {
            id: "CnKdjU6CyKakQDGHzNln",
            category: "Salgado",
            price: "1",
            photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
            name: "Bibsfiha carne",
            description: "Esfiha deliciosa, receita secreta do Habibs.",
            amount: 1
            
        },
        {
            id: "KJqMl2DxeShkSBevKVre",
            photoUrl: "https://www.sushimanscwb.com.br/wp-content/uploads/2018/10/1579_REFRIGERANTE_LATA_-_350ml_17d2e336feb44a2696fd6cf852c41b50-1.jpeg",
            name: "Refrigerante",
            description: "Coca cola, Sprite ou Guaraná",
            category: "Bebida",
            price: "4",
            amount: 1
        },
    ])

    const CardProduto = products.map((produto) => {
        return(
            <ProductCard product = {produto}/>
        )
    })

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

                    <p>{restaurant.address}</p>
                    <p> {restaurant.deliveryTime} - {restaurant.deliveryTime + 10} min </p>
                </InfoRestaurant>

                <ContainerProducts>
                    {CardProduto}
                </ContainerProducts>

                <Info>
                    <div>Frete R${restaurant.shipping.toFixed(2).replace(".", ",")}</div>
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