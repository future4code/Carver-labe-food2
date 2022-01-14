import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { notify } from "../constants/notify";

export const login = (body, navigate, setLoading, setState) => {
    const url = BASE_URL + '/login'

    const request = axios.post(url, body)

    request.then((res) => {
        localStorage.setItem('token', res.data.token)
        setState(res.data.user)
        setLoading(false)
        // navigate('/cadastrar-endereco')
        navigate('/perfil')
    }).catch((err) => {
        notify("error", err.response.data.message)
        setLoading(false)
    })
}

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
    })

}

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
        notify("error", err.response.data.message)
    }

}

export const placeOrder = (body, restaurantId) => {
    const url = BASE_URL + `/restaurants/${restaurantId}/order`
    const token = localStorage.getItem('token')

    const request = axios.put(url, body, {
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

export const getActiveOrder = () => {
    const url = BASE_URL + `/active-order`
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
export const getOrderHistory = () => {
    const url = BASE_URL + `/orders/history`
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