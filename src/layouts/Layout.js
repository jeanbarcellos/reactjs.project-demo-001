import { styled } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Main from 'layouts/Main'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLayoutConfig } from 'store/app/layoutSlice'
import { selectNavbarOpen, toggledNavbar } from 'store/app/navbarSlice'
import Footer from './Footer'
import Navigation from './Navigation'
import Toolbar from './Toolbar'

const Root = styled('div')(({ theme, config }) => ({
  backgroundColor: theme => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
  display: 'flex',
  width: '100%'
}))

const Layout = () => {
  const dispatch = useDispatch()

  const layoutConfig = useSelector(selectLayoutConfig)
  const open = useSelector(selectNavbarOpen)

  const toggleDrawer = () => dispatch(toggledNavbar())

  return (
    <Root id='layout-root'>
      <CssBaseline />
      {layoutConfig.toolbar.display && <Toolbar id='layout-toolbar' open={open} toggleDrawer={toggleDrawer} />}
      {layoutConfig.navbar.display && <Navigation id='layout-navbar' open={open} toggleDrawer={toggleDrawer} />}

      <Main />

      {layoutConfig.footer.display && <Footer id='layout-footer' />}
    </Root>
  )
}

export default memo(Layout)
