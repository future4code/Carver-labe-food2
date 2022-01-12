import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useRequestData(url,initialData) {
    const [data,setData] = useState(initialData)

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
    }, [url])


    return data
}
