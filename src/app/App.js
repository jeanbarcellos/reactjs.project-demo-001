import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import themeConfig from './config/themeConfig'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { create } from 'jss'
import { StylesProvider, jssPreset } from '@material-ui/core/styles'
import Layout from './layout'

const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: document.getElementById('jss-insertion-point')
})

const App = () => {
  return (
    <ThemeProvider theme={themeConfig}>
      <StylesProvider jss={jss}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
          <Layout />
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App
