import React from 'react'
import Router from './router/Router'
import GlobalState from './contexts/GlobalState'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'

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