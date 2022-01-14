import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalStateContext from '../contexts/GlobalStateContext'

export default function useProtectedPages() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const { states } = useContext(GlobalStateContext)

    useEffect(() => {

        if (!token) {
            navigate("/login")
        } else if (!states.user.hasAddress) {
            navigate("/cadastrar-endereco")
        }
    }, [])

}
