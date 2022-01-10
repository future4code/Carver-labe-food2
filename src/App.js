import React from 'react'
import Router from './router/Router'
import GlobalState from './contexts/GlobalState'

const App = () => {
  return (
    <GlobalState>
      <Router />
    </GlobalState>

  )
}

export default App