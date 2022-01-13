import axios from "axios"
import { BASE_URL } from "../constants/urls"

const placeOrder = (body, restaurantId) => {
    const token = localStorage.getItem('token')

    axios.post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, {

        headers: {
            auth: token
        }

    }).then(res => {

        return res.data.user

    }).catch(err => {

        alert(err.response.data.message)

    })

}

export default placeOrder