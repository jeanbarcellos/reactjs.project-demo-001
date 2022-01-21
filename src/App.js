import { ThemeProvider } from '@mui/material'
import themeConfig from 'config/themeConfig'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './layout'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeConfig}>
        <Router>
          <Layout />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
