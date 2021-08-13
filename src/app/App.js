import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import themeConfig from 'app/config/themeConfig'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { create } from 'jss'
import { StylesProvider, jssPreset } from '@material-ui/core/styles'
import Layout from './layout'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

store.subscribe(() => {
  console.log('Redux state:', store.getState())
})

const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: document.getElementById('jss-insertion-point')
})

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeConfig}>
        <StylesProvider jss={jss}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
            <Router>
              <Layout />
            </Router>
          </MuiPickersUtilsProvider>
        </StylesProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
