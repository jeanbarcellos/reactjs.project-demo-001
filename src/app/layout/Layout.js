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
import AppDialog from 'core/Dialog/AppDialog'
import AppLoadingDialog from 'core/Dialog/AppLoadingDialog'
import Loading from 'core/Loading'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
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
    <>
      <div id='layout-root' className={classes.root}>
        <CssBaseline />
        <Header id='layout-header' />
        <Navigation id='layout-navigation' open={open} handleDrawerClose={handleDrawerClose} />
        <main id='layout-main' className={classes.content}>
          <div className={classes.appBarSpacer} />
          <AppDialog />
          <AppLoadingDialog />
          <Suspense fallback={<Loading />}>{renderRoutes(routesConfig)}</Suspense>
          <Footer id='layout-footer ' />
        </main>
      </div>
    </>
  )
}

export default DashboardPage
