import React, { useContext, useState } from 'react'
import { ContainerPai, Cabecalho, AddressContainer, AddressUser, Cart, InfoRestaurant, ContainerProducts, CardProduto, Info, Price, Footer, Payment, Button } from './styled'
import ProductCard from '../RestaurantDetail/ProductCard/ProductCard'
import GlobalStateContext from '../../contexts/GlobalStateContext';

const CartPage = () => {
    let sum = 0;
    const [cart, setCart] = useContext(GlobalStateContext)
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
            amount: 5
        }
    ])


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

    const removeItem = (itemToRemove) => {
        const position = cart.findIndex((item) => {
            return item.id === itemToRemove.id;
        });

        let newCart = [...cart];

        if (newCart[position].amount === 1) {
            newCart.splice(position, 1);
        } else {
            newCart[position].amount -= 1;
        }

        setCart(newCart);
    };

    const CardProduct = products.map((product) => {
        sum += Number(product.price.replace(",", ".")) * product.amount

        const price = (Number(product.price.replace(",", ".")) * product.amount)

        return (
            <ProductCard photo={product.photoUrl} name={product.name} description={product.description} price={price.toFixed(2).replace(".",",")} amount={product.amount} removeItem={removeItem}/>
        )
    })

    return (
        <ContainerPai>
            {/* <Cabecalho /> */}

            <AddressContainer>
                <AddressUser>Endereço de entrega</AddressUser>
                <p>{profileUser.user.address}</p>
            </AddressContainer>

            <Cart>

                <InfoRestaurant>
                    <span> {restaurant.name} </span>

                    <p>{restaurant.address}</p>
                    <p> {restaurant.deliveryTime} - {restaurant.deliveryTime + 10} min </p>
                </InfoRestaurant>

                <ContainerProducts>
                    {CardProduct}
                </ContainerProducts>

                <Info>
                    <div>Frete R${restaurant.shipping.toFixed(2).replace(".", ",")}</div>
                    <Price>
                        <p>SUBTOTAL</p>
                        <span>R${(sum + restaurant.shipping).toFixed(2)}</span>
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