import { styled } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Main from 'layouts/Main'
import * as React from 'react'
import Header from './Header'
import Navigation from './Navigation'

const Root = styled('div')(({ theme, config }) => ({
  backgroundColor: theme => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
  display: 'flex',
  width: '100%'
}))

const Layout = () => {
  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <Root id='layout-root'>
      <CssBaseline />
      <Header id='layout-header' open={open} toggleDrawer={toggleDrawer} />
      <Navigation id='layout-navigation' open={open} toggleDrawer={toggleDrawer} />
      <Main />
    </Root>
  )
}

export default Layout
