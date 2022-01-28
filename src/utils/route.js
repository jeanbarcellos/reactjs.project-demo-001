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
      layout
    }
  })

  return routes
}
