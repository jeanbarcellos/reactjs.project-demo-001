import { indexRoute as dashboardIndexRoute } from 'modules/dashboard/routes'
import { error404Route } from 'modules/errors/routes'
import { createRedirectRoute, generateRoutesFromModuleConfig } from 'utils/route'
import modulesConfig from './modulesConfig'

const modulesRoutes = generateRoutesFromModuleConfig(modulesConfig)

const routesConfig = [
  createRedirectRoute('/', dashboardIndexRoute()),
  ...modulesRoutes,
  createRedirectRoute('*', error404Route())
]

export default routesConfig
