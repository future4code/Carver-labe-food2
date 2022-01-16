export const goToHome = (history) => {
    history("/home")
}
export const goToLogin = (history) => {
    history("/login")
}
export const goToRegister = (history) => {
    history("/cadastro")
}
export const goToAndress = (history) => {
    history("/cadastrar-endereco")
}
export const goToRestaurantDetails= (history, id) => {
    history(`/restaurante/${id}`)
}

export const goToCart = (history) => {
    history("/carrinho")
}

export const goToProfile = (history) =>{
    history("/perfil")
}

export const goToSearch=(history)=>{
    history("/busca")
}