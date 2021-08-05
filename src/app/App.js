import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './config/theme'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import DemoPage from './pages/DemoPage'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
        <DemoPage />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default App
