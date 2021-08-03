import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './config/theme'
import { Typography } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
        <div className='App'>
          <Typography variant='h3' component='h1' gutterBottom>
            Olá mundo!
          </Typography>
          <Typography variante='p' component='p' gutterBottom>
            Demo
          </Typography>
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default App
