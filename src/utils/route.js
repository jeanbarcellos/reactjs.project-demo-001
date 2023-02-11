import { Navigate } from 'react-router'
import { isBoolean } from 'utils'
import { createArrayRoles } from './security'

const AUTH_DEFAULT = true

export const createRoute = (path, element, auth = true, role = []) => {
  return {
    path: path,
    element: element,
    auth: auth,
    role: role
  }
}

export const createPublicRoute = (path, element) => createRoute(path, element, false)

export const createAuthRoute = (path, element, role = []) => createRoute(path, element, true, role)

export const createRedirectRoute = (path, to, auth = true, role = []) =>
  createRoute(path, <Navigate to={to} />, auth, role)

export const generateRoutesFromModuleConfig = configs => {
  let routes = []

  configs.forEach(config => {
    routes = [...routes, ...generateRouteFromModuleConfig(config)]
  })

  return routes
}

const generateRouteFromModuleConfig = config => {
  let routes = [...config.routes]

  routes = routes.map(route => {
    const layout = { ...config.layout, ...route.layout }

    return {
      ...route,
      layout,
      auth: generateRouteAuth(config, route),
      role: generageRouteRoles(config, route)
    }
  })

  return routes
}

const generateRouteAuth = (config, route) => {
  const moduleAuth = isBoolean(config.auth) ? config.auth : AUTH_DEFAULT
  const routeAuth = isBoolean(route.auth) ? route.auth : moduleAuth

  return routeAuth
}

const generageRouteRoles = (config, route) => {
  const moduleRoles = createArrayRoles(config.role)
  const routeRoles = createArrayRoles(route.role)

  return routeRoles.length > 0 ? routeRoles : moduleRoles
}

export const checkHasPermissionRouter = (route, userAuthenticated, userRoles = []) =>
  hasAuth(route.auth, route.role, userAuthenticated, userRoles)
