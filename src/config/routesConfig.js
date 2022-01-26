import { indexRoute as dashboardIndexRoute } from 'modules/dashboard/routes'
import { error404Route } from 'modules/errors/routes'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { generateRoutesFromModuleConfig } from 'utils'
import modulesConfig from './modulesConfig'

const routesConfig = [
  {
    path: '/',
    element: <Navigate to={dashboardIndexRoute()} />
  },
  ...generateRoutesFromModuleConfig(modulesConfig),
  {
    path: '*',
    element: <Navigate to={error404Route()} />
  }
]

export default routesConfig
