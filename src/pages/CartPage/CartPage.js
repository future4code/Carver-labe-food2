import React, { useContext, useState } from 'react'
import * as C from './styled'
import ProductCard from '../RestaurantDetail/ProductCard/ProductCard'
import GlobalStateContext from '../../contexts/GlobalStateContext';
import useForm from '../../hooks/useForm';
import placeOrder from '../../services/placeOrder';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';



const CartPage = () => {
    let sum = 0;
    const [cart, , restaurant, ] = useContext(GlobalStateContext)
    const [form, onChange] = useForm({ paymentMethod: "" })
    const productsRequisitions = []

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
        )
    })



    return (
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

                            <FormControl component="fieldset" color="black">
                                <RadioGroup aria-label="gender" name="paymentMethod" onChange={onChange}>
                                    <FormControlLabel value="money" control={<Radio />} label="Dinheiro"/>
                                    <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
                                </RadioGroup>
                            </FormControl>


                        </C.Payment>

                    </C.Cart>
                </div>
                <div>
                    <C.ButtonUI onClick={purchase} variant="contained" color="primary" disabled={cart.length === 0 || form.paymentMethod === ""}>
                        Confirmar
                    </C.ButtonUI>

                </div>
            </C.InfoCart>
        </C.ContainerPai >
    )
}

export default CartPage