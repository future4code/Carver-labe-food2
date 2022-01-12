import axios from "axios";
import { BASE_URL } from "../constants/urls";


export const login = (body) => {
    const url = BASE_URL + '/login'

    const request = axios.post(url, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    request.then((res) => {
        localStorage.setItem('token', res.data.token)
        return res.data.user
    }).catch((err) => {
        alert(err.response.data.message)
    })
}

export const singUp = (body) => {

    const url = BASE_URL + '/signup'
    const request = axios.post(url, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    request.then(res => {
        localStorage.setItem('token', res.data.token)
        return res.data.user
    }).catch(err => {
        alert(err.response.data.message)
    })
}

export const addAdress = (body) => {
    const url = BASE_URL + '/address'
    const token = localStorage.getItem('token')

    const request = axios.put(url, body, {
        headers: {
            auth: token,
            'Content-Type': 'application/json'
        }
    })
    request.then(res => {
        localStorage.setItem('token, res.data.token')
        return res.data.user
    }).catch(err => {
        alert(err.response.data.message)
    })

}

export const getFullAddress = () => {
    const url = BASE_URL + '/profile/address'
    const token = localStorage.getItem('token')

    const request = axios.get(url, {
        headers: {
            auth: token,
            'Content-Type': 'application/json'
        }
    })
    request.then(res => {
        return res.data
    }).catch(err => {
        alert(err.response.data.message)
    })
}

export const placeOrder = (body, restaurantId) => {
    const url = BASE_URL + `/restaurants/${restaurantId}/order`
    const token = localStorage.getItem('token')

    const request = axios.put(url, body, {
        headers: {
            auth: token,
            'Content-Type': 'application/json'
        }
    })
    request.then(res => {
        return res.data
    }).catch(err => {
        alert(err.response.data.message)
    })
}

export const updateProfile = (body) => {
    const url = BASE_URL + `/profile`
    const token = localStorage.getItem('token')

    const request = axios.put(url, body, {
        headers: {
            auth: token,
            'Content-Type': 'application/json'
        }
    })
    request.then(res => {

        return res.data.user
    }).catch(err => {
        alert(err.response.data.message)
    })

}

export const getRestaurants = () => {

    const url = BASE_URL + '/restaurants'
    const token = localStorage.getItem('token')

    const request = axios.get(url, {
        headers: {
            auth: token,
            'Content-Type': 'application/json'
        }
    })

    request.then(res => {
        return res.data
    }).catch(err => {
        alert(err.response.data.message)
    })

}

export const getRestaurantsDetails = async (restaurantId, token) => {
    const url = BASE_URL + `/restaurants/${restaurantId}`
    // const token = localStorage.getItem('token')

    try {
        const request = await axios.get(url, {
            headers: {
                auth: token,
                'Content-Type': 'application/json'
            }
        })
        return request.data;
    } catch (err) {
        alert(err.response);
    }

}

export const getActiveOrder = () => {
    const url = BASE_URL + `/active-order`
    const token = localStorage.getItem('token')

    const request = axios.get(url, {
        headers: {
            auth: token,
            'Content-Type': 'application/json'
        }
    })

    request.then(res => {
        return res.data
    }).catch(err => {
        alert(err.response.data.message)
    })
}
export const getOrderHistory = () => {
    const url = BASE_URL + `/orders/history`
    const token = localStorage.getItem('token')

    const request = axios.get(url, {
        headers: {
            auth: token,
            'Content-Type': 'application/json'
        }
    })

    request.then(res => {
        return res.data
    }).catch(err => {
        alert(err.response.data.message)
    })
}