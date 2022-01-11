import React from 'react'
import Router from './router/Router'
import GlobalState from './contexts/GlobalState'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'
import LoginPage from './pages/LoginPage/LoginPage'
import InitialPage from './pages/InitialPage/InitialPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import AndressPage from './pages/AddressPage/AndressPage'
import CartPage from './pages/CartPage/CartPage'
import { createGlobalStyle } from 'styled-components'

const App = () => {

  const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }

`;

  return (
    <GlobalState>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        {/* <Router /> */}
        {/* <InitialPage/> */}
        {/* <LoginPage/> */}
        {/* <RegisterPage/> */}
        {/* <AndressPage/> */}
        <CartPage/>
      </ThemeProvider>
    </GlobalState>
  )
}

export default App