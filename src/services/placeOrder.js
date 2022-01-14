import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { notify } from "../constants/notify";

const placeOrder = (body, restaurantId) => {
    const token = localStorage.getItem('token')

    axios.post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, {

        headers: {
            auth: token
        }

    }).then(res => {

        notify("success", "O pedido foi enviado!")
        return res.data.user
        
    }).catch(err => {

        notify("error", err.response.data.message);

    })

}

export default placeOrder