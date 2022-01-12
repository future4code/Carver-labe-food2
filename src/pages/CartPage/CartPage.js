import React, { useContext, useState } from 'react'
import { ContainerPai, Cabecalho, AddressContainer, AddressUser, Cart, InfoRestaurant, ContainerProducts, CardProduto, Info, Price, Footer, Payment, Button } from './styled'
import ProductCard from '../RestaurantDetail/ProductCard/ProductCard'
import GlobalStateContext from '../../contexts/GlobalStateContext';

const CartPage = () => {
    let sum = 0;
    const [cart,] = useContext(GlobalStateContext)

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

    const [profileUser, setProfileUser] = useState(
        {
            "user": {
                "id": "De8UACSFgFySnKdXm5hI",
                "name": "Astrodev",
                "email": "astrodev@future4.com",
                "cpf": "111.111.111-11",
                "hasAddress": true,
                "address": "R. Afonso Braz, 177 - Vila N. Conceição"
            }
        })


    const changeAccent = (number) => {
        return number.toFixed(2).replace(".", ",")
    }
    

    const CardProduct = cart.map((product) => {
        sum += Number(product.price.replace(",", ".")) * product.amount

        const price = (Number(product.price.replace(",", ".")) * product.amount)

        return (
            <ProductCard photo={product.photoUrl} id={product.id} name={product.name} description={product.description} price={changeAccent(price)} amount={product.amount} />
        )
    })

    return (
        <ContainerPai>

            <AddressContainer>
                <AddressUser>Endereço de entrega</AddressUser>
                <p>{profileUser.user.address}</p>
            </AddressContainer>

            <Cart>
                {cart.length < 1 ? <div> Carrinho vazio </div> : <>
                    <InfoRestaurant>
                        <span> {restaurant.name} </span>

                        <p>{restaurant.address}</p>
                        <p> {restaurant.deliveryTime} - {restaurant.deliveryTime + 10} min </p>
                    </InfoRestaurant>

                    <ContainerProducts>
                        {CardProduct}
                    </ContainerProducts>
                </>}


                <Info>
                    <div>Frete R${cart.length < 1 ? <> 0,00 </> : changeAccent(restaurant.shipping)}</div>
                    <Price>
                        <p>SUBTOTAL</p>
                        <span>R${cart.length < 1 ? <> 0,00 </> : (changeAccent(sum + restaurant.shipping))}</span>
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