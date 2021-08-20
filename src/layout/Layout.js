import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navigation from './Navigation'
import Footer from './Footer'
import Header from './Header'
import routesConfig from 'config/routesConfig'
import { renderRoutes } from 'react-router-config'
import { Suspense } from 'react'
import layoutConfig from 'config/layoutConfig'
import { useDispatch, useSelector } from 'react-redux'
import { closedNavbar, selectNavbarOpen } from 'store/app/navbarSlice'
import AppDialog from 'components/Dialog/AppDialog'
import AppLoadingDialog from 'components/Dialog/AppLoadingDialog'
import AppMessage from 'components/Message/AppMessage'
import Loading from 'components/Loading'

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
    dispatch(closedNavbar())
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
          <AppMessage />

          <Suspense fallback={<Loading />}>{renderRoutes(routesConfig)}</Suspense>
          <Footer id='layout-footer ' />
        </main>
      </div>
    </>
  )
}

export default DashboardPage
