import React from 'react'
import Router from './router/Router'
import GlobalState from './contexts/GlobalState'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'
import LoginPage from './pages/LoginPage/LoginPage'
import InitialPage from './pages/InitialPage/InitialPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import AndressPage from './pages/AddressPage/AndressPage'

const App = () => {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GlobalState>
  )
}

export default App