import routes from 'config/routesConfig'
import useDeepCompareEffect from 'hooks/useDeepCompareEffect'
import _ from 'lodash'
import React, { memo, useCallback, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { matchRoutes, useLocation } from 'react-router'
import { generateLayout, selectLayoutConfig, selectLayoutDefaultConfig, setLayout } from 'store/app/layoutSlice'
import layouts from './layouts'
import settingsConfig from 'config/settingsConfig'

const LayoutManager = props => {
  const dispatch = useDispatch()

  const layoutDefaultConfig = useSelector(selectLayoutDefaultConfig)
  const layoutConfig = useSelector(selectLayoutConfig)

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

  // console.warn('::LayoutManager:: rendered');

  const showContent = () => _.isEqual(newLayout.current, layoutConfig)

  const Layout = useMemo(() => layouts[settingsConfig.layout.style], [settingsConfig.layout.style])

  return showContent() ? <Layout {...props} /> : null
}

export default memo(LayoutManager)
