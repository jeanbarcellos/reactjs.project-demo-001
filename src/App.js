import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import themeConfig from 'config/themeConfig'
import LayoutManager from 'layouts/LayoutManager'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

export const muiCache = createCache({
  key: 'mui',
  prepend: true
})

const App = () => {
  return (
    <Provider store={store}>
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={themeConfig}>
          <Router>
            <LayoutManager />
          </Router>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )
}

export default App
