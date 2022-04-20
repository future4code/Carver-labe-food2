import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { notify } from "../constants/notify";

// REQUISIÇÃO PARA LOGAR
export const login = (body, navigate, setLoading, setState) => {
    const url = BASE_URL + '/login'

    const request = axios.post(url, body)

    request.then((res) => {
        localStorage.setItem('token', res.data.token)
        setState(res.data.user)
        setLoading(false)
        navigate('/home')
    }).catch((err) => {
        notify("error", err.response.data.message)
        setLoading(false)
    })
}

// REQUISIÇÃO PARA SE CADASTRAR

export const signUp = (body, setter, navigate, setLoading) => {

    const url = BASE_URL + '/signup'

    const request = axios.post(url, body)

    request.then(res => {
        localStorage.setItem('token', res.data.token)

        setter(res.data.user)
        navigate('/cadastrar-endereco')
        setLoading(false)

    }).catch(err => {
        setLoading(false)
        notify("error", err.response.data.message)
    })
}

// REQUISIÇÃO PARA COLOCAR E EDITAR ENDEREÇO

export const addAdress = (body, setLoading, setUser, navigate) => {
    const url = BASE_URL + '/address'
    const token = localStorage.getItem('token')

    const request = axios.put(url, body, {
        headers: {
            auth: token
        }
    })
    request.then((res) => {
        localStorage.setItem('token', res.data.token)
        setUser(res.data.user)
        setLoading(false)
        notify("success", "Endereço atualizado com sucesso!")
        navigate('/home', { replace: true })
    }).catch(err => {
        notify("error", err.response.data.message)
        setLoading(false)
    })

}

// REQUISIÇÃO PARA PEGAR RESTAURANTES

export const getRestaurants = () => {

    const url = BASE_URL + '/restaurants'
    const token = localStorage.getItem('token')

    const request = axios.get(url, {
        headers: {
            auth: token
        }
    })

    request.then(res => {
        return res.data
    }).catch(err => {
        notify("error", err.response.data.message)
    })

}

// REQUISIÇÃO PARA PEGAR DETALHES DE UM RESTAURANTE

export const getRestaurantsDetails = async (restaurantId) => {
    const url = BASE_URL + `/restaurants/${restaurantId}`
    const token = localStorage.getItem('token')

    try {
        const request = await axios.get(url, {
            headers: {
                auth: token,
            }
        })
        return request.data;
    } catch (err) {
        notify("error", err.response.data.message)
    }

}

// REQUISIÇÃO PARA CONCLUIR UMA COMPRA

export const placeOrder = (body, restaurantId) => {
    const token = localStorage.getItem('token')

    axios.post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, {

        headers: {
            auth: token
        }

    }).then(res => {

        notify("success", "O pedido foi enviado!")

    }).catch(err => {

        notify("error", err.response.data.message);

    })

}

// REQUISIÇÃO PARA PEGAR INFORAMAÇÕES PARA BANNER DE PEDIDO EM ANDAMENTO

export const getActiveOrder = (setOrder) => {
    const url = BASE_URL + `/active-order`
    const token = localStorage.getItem('token')

    const request = axios.get(url, {
        headers: {
            auth: token
        }
    })

    request.then(res => {
        setOrder(res.data.order)
    }).catch(err => {
        notify("error", err.response.data.message)
    })
}

// REQUISIÇÃO PARA PEGAR PERFIL

export const getProfile = (setAddressUser) => {
    const url = BASE_URL + '/profile'
    const token = localStorage.getItem('token')

    const request = axios.get(url, {
        headers: {
            auth: token
        }
    })

    request.then(res => {
        setAddressUser(res.data.user)
    }).catch(err => {
        notify("error", err.response.data.message)
    })

}


// REQUISIÇÃO PARA PEGAR O ENDEREÇO COMPLETO DO USUARIO

export const getFullAddress = async () => {
    const url = BASE_URL + '/profile/address'
    const token = localStorage.getItem('token')

    try {
        const request = await axios.get(url, {
            headers: {
                auth: token
            }
        })

        return request

    } catch (err) {
        notify("error", "É necessário cadastrar um endereço!")
    }

}

// REQUISIÇÃO PARA EDITAR AS INFORMAÇÕES DE UM PERFIL

export const updateProfile = (body, setLoading, navigate, setUser) => {
    const url = BASE_URL + `/profile`
    const token = localStorage.getItem('token')

    const request = axios.put(url, body, {
        headers: {
            auth: token
        }
    })
    request.then(res => {
        setUser(res.data.user)
        setLoading(false)
        navigate(-1)
    }).catch(err => {
        notify("error", err.response.data.message)
        setLoading(false)
    })

}

// REQUISIÇÃO PARA PEGAR LISTA DE PEDIDOS ANTERIORES

export const getOrderHistory = (setOrderHistory) => {
    const url = BASE_URL + `/orders/history`
    const token = localStorage.getItem('token')

    const request = axios.get(url, {
        headers: {
            auth: token
        }
    })

    request.then(res => {
        setOrderHistory(res.data.orders)
    }).catch(err => {
        notify("error", err.response.data.message)
    })
}