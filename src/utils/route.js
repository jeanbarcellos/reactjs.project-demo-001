import { isBoolean } from 'utils'
import { createArrayRoles } from './security'

const AUTH_DEFAULT = true

export const createRoute = (path, element, auth = true, role = null) => {
  return {
    path: path,
    element: element,
    auth: auth,
    role: role
  }
}

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
