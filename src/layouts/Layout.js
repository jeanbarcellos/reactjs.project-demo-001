import { styled } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Main from 'layouts/Main'
import React, { memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateLayout, selectLayoutConfig, selectLayoutDefaultConfig, setLayout } from 'store/app/layoutSlice'
import { selectNavbarOpen, toggledNavbar } from 'store/app/navbarSlice'
import Footer from './Footer'
import Navigation from './Navigation'
import Toolbar from './Toolbar'
import routes from 'config/routesConfig'
import { matchRoutes, useLocation } from 'react-router'
import _ from 'lodash'
import useDeepCompareEffect from 'hooks/useDeepCompareEffect'

const Root = styled('div')(({ theme, config }) => ({
  backgroundColor: theme => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
  display: 'flex',
  width: '100%'
}))

const Layout = () => {
  const dispatch = useDispatch()

  const layoutDefaultConfig = useSelector(selectLayoutDefaultConfig)
  const layoutConfig = useSelector(selectLayoutConfig)
  const open = useSelector(selectNavbarOpen)

  const toggleDrawer = () => dispatch(toggledNavbar())

  //////////////////////////////////////////////////////////////////////////////

  const location = useLocation()
  const { pathname } = location

  const matchedRoutes = matchRoutes(routes, pathname)
  const matchedRoute = matchedRoutes ? matchedRoutes[0] : false

  const newLayout = useRef(null)

  const shouldAwaitRender = useCallback(() => {
    let _newLayout

    if (matchedRoute && matchedRoute.route.layout) {
      const routeLayout = matchedRoute.route.layout
      _newLayout = generateLayout(routeLayout)
    } else if (!_.isEqual(newLayout.current, layoutDefaultConfig)) {
      _newLayout = _.merge({}, layoutDefaultConfig)
    } else {
      _newLayout = newLayout.current
    }

    if (!_.isEqual(newLayout.current, _newLayout)) {
      newLayout.current = _newLayout
    }
  }, [layoutDefaultConfig, matchedRoute])

  shouldAwaitRender()

  useDeepCompareEffect(() => {
    if (!_.isEqual(newLayout.current, layoutConfig)) {
      dispatch(setLayout(newLayout.current))
    }
  }, [dispatch, newLayout.current, layoutConfig])

  const showContent = () => _.isEqual(newLayout.current, layoutConfig)

  return showContent() ? (
    <Root id='layout-root'>
      <CssBaseline />
      {layoutConfig.toolbar.display && <Toolbar id='layout-toolbar' open={open} toggleDrawer={toggleDrawer} />}
      {layoutConfig.navbar.display && <Navigation id='layout-navbar' open={open} toggleDrawer={toggleDrawer} />}

      <Main />

      {layoutConfig.footer.display && <Footer id='layout-footer' />}
    </Root>
  ) : null
}

export default memo(Layout)
