import axios from "axios";
import { BASE_URL } from "../constants/urls";


export const login = (body,navigate, setLoading, setState) => {
    const url = BASE_URL + '/login'
    
    const request = axios.post(url, body,{
        headers:{
            'Content-Type': 'application/json'
        }
    })

    request.then((res)=>{
        localStorage.setItem('token', res.data.token)
        setState(res.data.user)
        setLoading(false)
        // navigate('/cadastrar-endereco')
        navigate('/profile')
    }).catch((err)=>{
        alert(err.response.data.message)
        setLoading(false)
    })
}

export const signUp = (body, setter, navigate,setLoading) => {

    const url = BASE_URL + '/signup'
    
    const request = axios.post(url, body,{
        headers:{
            'Content-Type': 'application/json'
        }
    })

    request.then(res=>{
        localStorage.setItem('token', res.data.token)
        setter(res.data.user)
        navigate('/cadastrar-endereco')
        setLoading(false)
        
    }).catch(err=>{
        setLoading(false)
        alert(err.response.data.message)
    })
}

export const addAdress = (body,setLoading,setUser,navigate) => {
    const url = BASE_URL + '/address'
    const token = localStorage.getItem('token')

    const request = axios.put(url, body,{
        headers:{
            auth:token,
            'Content-Type': 'application/json'
        }
    })
    request.then((res) => {
        localStorage.setItem('token', res.data.token)
        setUser(res.data.user)
        alert("Endereço Atualizado com sucesso!") 
        setLoading(false)
        navigate('/home',{replace:true})
    }).catch(err => {
        alert(err.response)
        console.log(err)
    })

}

export const getFullAddress = async() => {
    const url = BASE_URL + '/profile/address'
    const token = localStorage.getItem('token')
    try{
        const request = await axios.get(url,{
            headers:{
                auth:token
            }
        })

        return request

    }catch(err) {
        alert(err)
    }
}

export const placeOrder = (body,restaurantId) => {
    const url = BASE_URL +  `/restaurants/${restaurantId}/order`
    const token = localStorage.getItem('token')

    const request = axios.put(url, body,{
        headers:{
            auth:token,
            'Content-Type': 'application/json'
        }
    })
    request.then(res => {

        return res.data.user
    }).catch(err => {
        alert(err.response.data.message)
    })

}

export const updateProfile = (body, setLoading,navigate,setUser) => {
    const url = BASE_URL + `/profile`
    const token = localStorage.getItem('token')

    const request = axios.put(url, body,{
        headers:{
            auth:token,
            'Content-Type': 'application/json'
        }
    })
    request.then(res => {
        setUser(res.data.user)
        setLoading(false)
        navigate(-1)
    }).catch(err => {
        alert(err.response.data.message)
        setLoading(false)
    })

}

export const getRestaurants = ()=>{

    const url = BASE_URL + '/restaurants'
    const token = localStorage.getItem('token')

    const request = axios.get(url,{
        headers:{
            auth:token,
            'Content-Type': 'application/json'
        }
    })

    request.then(res=>{
        return res.data
    }).catch(err => {
        alert(err.response.data.message)
    })

}

export const getRestaurantsDetails = (restaurantId) => {
    const url = BASE_URL + `/restaurants/${restaurantId}`
    const token = localStorage.getItem('token')

    const request = axios.get(url,{
        headers:{
            auth:token,
            'Content-Type': 'application/json'
        }
    })

    request.then(res=>{
        return res.data
    }).catch(err => {
        alert(err.response.data.message)
    })
}

export const getActiveOrder = () => {
    const url = BASE_URL + `/active-order`
    const token = localStorage.getItem('token')

    const request = axios.get(url,{
        headers:{
            auth:token,
            'Content-Type': 'application/json'
        }
    })

    request.then(res=>{
        return res.data
    }).catch(err => {
        alert(err.response.data.message)
    })
}
export const getOrderHistory = () => {
    const url = BASE_URL + `/orders/history`
    const token = localStorage.getItem('token')

    const request = axios.get(url,{
        headers:{
            auth:token,
            'Content-Type': 'application/json'
        }
    })

    request.then(res=>{
        return res.data
    }).catch(err => {
        alert(err.response.data.message)
    })
}