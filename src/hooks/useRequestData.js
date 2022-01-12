import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useRequestData(url) {
    const [data,setData] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(url,{
            headers:{
                auth:token,
                'Content-Type': 'application/json'
            }
        })
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }, [input])


    return data
}
