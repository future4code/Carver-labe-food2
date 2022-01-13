import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useProtectedPages(user) {
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/login')
        }else{
            if(!user.hasAddress){
                navigate('/cadastrar-endereco')
            }
        }
    },[navigate])
    return (
        <div>
            
        </div>
    )
}
