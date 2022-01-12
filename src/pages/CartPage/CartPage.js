<<<<<<< HEAD
import React, { useState } from 'react'
import { ContainerPai, Cabecalho, AddressContainer, AddressUser, Cart, InfoRestaurant, ContainerProducts, CardProduto, Info, Price, Payment, Button, Footer1 } from './styled'
import ProductCard from '../RestaurantDetail/ProductCard/ProductCard'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
=======
import React, { useContext, useState } from 'react'
// import { ContainerPai, AddressContainer, AddressUser, Cart, InfoRestaurant, ContainerProducts, Info, Price, Footer, Payment, Button } from './styled'
import * as C from './styled'
import ProductCard from '../RestaurantDetail/ProductCard/ProductCard'
import GlobalStateContext from '../../contexts/GlobalStateContext';
import useForm from '../../hooks/useForm';
import placeOrder from '../../services/placeOrder';
import Footer from '../../components/Footer/Footer';
>>>>>>> e98fd506c59030e9bfa447e6b180a503d21e71e2

const CartPage = () => {
    let sum = 0;
    const [cart, setCart, restaurant, setRestaurant] = useContext(GlobalStateContext)
    const [form, onChange] = useForm({ paymentMethod: "" })
    const productsRequisitions = []

<<<<<<< HEAD
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
        return (
            <ProductCard product={produto} />
=======
    // REPRESENTAÇÃO DAS INFORMAÇÕES DO PERFIL

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


    // FUNÇÃO DE COLOCAR VIRGULA E DUAS CASAS DECIMAIS

    const changeAccent = (number) => {
        return number.toFixed(2).replace(".", ",")
    }


    // FUNÇÃO DE CONCLUIR A COMPRA

    const purchase = () => {

        const body = {
            products: productsRequisitions,
            paymentMethod: form.paymentMethod
        }

        placeOrder(body, restaurant.id)
    }


    // MAP PRA RENDERIZAR OS CARDS DO CARRINHO

    const CardProduct = cart.map((product) => {

        // SOMAR AS INFORMAÇÕES E MULTIPLICAR OS PRODUTOS PELAS QUANTIDADES
        sum += Number(product.price.replace(",", ".")) * product.amount
        const price = (Number(product.price.replace(",", ".")) * product.amount)

        //PUSHAR PARA O ARRAY PRODUCTS OBJETO COM ID E QUANTIFY
        productsRequisitions.push({
            id: product.id,
            quantity: product.amount
        })

        return (
            <ProductCard photo={product.photoUrl} id={product.id} name={product.name} description={product.description} price={changeAccent(price)} amount={product.amount} />
>>>>>>> e98fd506c59030e9bfa447e6b180a503d21e71e2
        )
    })



    return (
<<<<<<< HEAD
        <ContainerPai>
            {/* <Cabecalho /> */}
            <Header />

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
                <Footer1>
                    <Footer />
                </Footer1>

            </Cart>

        </ContainerPai>
=======
        <C.ContainerPai>
            <C.InfoCart>
                <div>
                    <C.AddressContainer>
                        <C.AddressUser>Endereço de entrega</C.AddressUser>
                        <p>{profileUser.user.address}</p>
                    </C.AddressContainer>

                    <C.Cart>
                        {cart.length < 1 ? <C.EmptyCart> Carrinho vazio </C.EmptyCart> : <>
                            <C.InfoRestaurant>
                                <span> {restaurant.name} </span>

                                <p>{restaurant.address}</p>
                                <p> {restaurant.deliveryTime} - {restaurant.deliveryTime + 10} min </p>
                            </C.InfoRestaurant>

                            <C.ContainerProducts>
                                {CardProduct}
                            </C.ContainerProducts>
                        </>}


                        <C.Info>
                            <div>Frete R${cart.length < 1 ? <> 0,00 </> : changeAccent(restaurant.shipping)}</div>
                            <C.Price>
                                <p>SUBTOTAL</p>
                                <span>R${cart.length < 1 ? <> 0,00 </> : (changeAccent(sum + restaurant.shipping))}</span>
                            </C.Price>
                        </C.Info>
                        <C.Payment>
                            <p>Forma de Pagamento</p>


                            <form name='paymentMethod' value={form} onChange={onChange}>
                                <label>
                                    <input name="paymentMethod" type='radio' value="money" />
                                    Dinheiro
                                </label>

                                <label>
                                    <input name="paymentMethod" type='radio' value="creditcard" />
                                    Cartão de Crédito
                                </label>
                            </form>


                        </C.Payment>

                    </C.Cart>
                </div>
                <div>
                    <C.Button onClick={purchase}>
                        Confirmar
                    </C.Button>
                </div>
            </C.InfoCart>

            <Footer />
        </C.ContainerPai >
>>>>>>> e98fd506c59030e9bfa447e6b180a503d21e71e2
    )
}

export default CartPage