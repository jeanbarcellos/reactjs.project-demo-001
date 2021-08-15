import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navigation from './Navigation'
import Footer from './Footer'
import Header from './Header'
import routesConfig from 'app/config/routesConfig'
import { renderRoutes } from 'react-router-config'
import { Suspense } from 'react'
import layoutConfig from 'app/config/layoutConfig'
import { useDispatch, useSelector } from 'react-redux'
import { navbarClosed, selectNavbarOpen } from 'app/store/app/navbarSlice'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    paddingBottom: `${layoutConfig.footer.height}px`
  }
}))

const DashboardPage = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const open = useSelector(selectNavbarOpen)

  const handleDrawerClose = () => {
    dispatch(navbarClosed())
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Navigation open={open} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Suspense fallback={<div>Loading...</div>}>{renderRoutes(routesConfig)}</Suspense>
        <Footer />
      </main>
    </div>
  )
}

export default DashboardPage
