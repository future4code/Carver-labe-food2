import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import GlobalStateContext from '../../contexts/GlobalStateContext';
import useForm from '../../hooks/useForm';
import { getProfile, placeOrder } from '../../services/services';
import * as C from './styled'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

const CartPage = () => {
    let sum = 0;
    const { states, setters } = useContext(GlobalStateContext)
    const [form, onChange, cleanFields] = useForm({ paymentMethod: "" })
    const productsRequisitions = []
    const [addressUser, setAddressUser] = useState({})


    useEffect(() => {
        getProfile(setAddressUser)
    }, [])


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

        placeOrder(body, states.cart[0].restaurant.id)
        setters.setCart([])
        cleanFields()
    }

    // MAP PRA RENDERIZAR OS CARDS DO CARRINHO

    const CardProduct = states.cart.map((product) => {

        // SOMAR AS INFORMAÇÕES E MULTIPLICAR OS PRODUTOS PELAS QUANTIDADES
        sum += Number(product.price.replace(",", ".")) * product.quantify
        const price = (Number(product.price.replace(",", ".")) * product.quantify)

        //PUSHAR PARA O ARRAY PRODUCTS OBJETO COM ID E QUANTIFY
        productsRequisitions.push({
            id: product.id,
            quantity: product.quantify
        })

        return (
            <ProductCard photo={product.photo} id={product.id} name={product.name} description={product.description} price={changeAccent(price)} quantify={product.quantify} key={product.id}/>
        )
    })



    return (
        <C.ContainerPai>
            <C.InfoCart>
                <div>
                    <C.AddressContainer>
                        <C.AddressUser>Endereço de entrega</C.AddressUser>
                        <p>{addressUser && addressUser.address}</p>
                    </C.AddressContainer>

                    <C.Cart>
                        {states.cart.length < 1 ? <C.EmptyCart> Carrinho vazio </C.EmptyCart> : <>
                            <C.InfoRestaurant>
                                <span> {states.cart[0].restaurant.name} </span>
                                <p>{states.cart[0].restaurant.address}</p>
                                <p> {states.cart[0].restaurant.deliveryTime} - {states.cart[0].restaurant.deliveryTime + 10} min </p>
                            </C.InfoRestaurant>

                            <C.ContainerProducts>
                                {CardProduct}
                            </C.ContainerProducts>
                        </>}


                        <C.Info>
                            <div>Frete R${states.cart.length < 1 ? <> 0,00 </> : changeAccent(states.cart[0].restaurant.shipping)}</div>
                            <C.Price>
                                <p>SUBTOTAL</p>
                                <span>R${states.cart.length < 1 ? <> 0,00 </> : (changeAccent(sum + states.cart[0].restaurant.shipping))}</span>
                            </C.Price>
                        </C.Info>
                        <C.Payment>
                            <p>Forma de Pagamento</p>

                            <FormControl component="fieldset" color="black">
                                <RadioGroup aria-label="gender" name="paymentMethod" onChange={onChange}>
                                    <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
                                    <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
                                </RadioGroup>
                            </FormControl>


                        </C.Payment>

                    </C.Cart>
                </div>
                <div>
                    <C.ButtonUI onClick={purchase} variant="contained" color="primary" disabled={states.cart.length === 0 || form.paymentMethod === ""}>
                        Confirmar
                    </C.ButtonUI>

                </div>
            </C.InfoCart>
        </C.ContainerPai >
    )
}

export default CartPage