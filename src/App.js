import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import history from '@history'
import { ThemeProvider } from '@mui/material'
import BrowserRouter from 'components/router/BrowserRouter'
import themeConfig from 'config/themeConfig'
import LayoutManager from 'layouts/LayoutManager'
import React from 'react'
import { Provider } from 'react-redux'
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
          <BrowserRouter history={history}>
            <LayoutManager />
          </BrowserRouter>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )
}

export default App
