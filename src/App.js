import React from 'react'
import Router from './router/Router'
import GlobalState from './contexts/GlobalState'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'
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
        <Router />
      </ThemeProvider>
    </GlobalState>
  )
}

export default App