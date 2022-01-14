import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHome, goToLogin } from "../router/coordinator"

const useUnprotectedPage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token) {
            goToHome(navigate)

        } else {
            goToLogin(navigate)
        }

    }, [])
}

export default useUnprotectedPage