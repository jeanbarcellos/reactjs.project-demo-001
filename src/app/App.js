import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './config/theme'
import { Typography } from '@material-ui/core'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Typography variant='h3' component='h1' gutterBottom>
          Olá mundo!
        </Typography>
        <Typography variante='p' component='p' gutterBottom>
          Demo
        </Typography>
      </div>
    </ThemeProvider>
  )
}

export default App
