import { indexRoute as dashboardIndexRoute } from 'modules/dashboard/routes'
import { error404Route } from 'modules/errors/routes'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { generateRoutesFromModuleConfig } from 'utils/route'
import modulesConfig from './modulesConfig'

const modulesRoutes = generateRoutesFromModuleConfig(modulesConfig)

const routesConfig = [
  {
    path: '/',
    element: <Navigate to={dashboardIndexRoute()} />,
    auth: true,
    role: []
  },
  ...modulesRoutes,
  {
    path: '*',
    element: <Navigate to={error404Route()} />,
    auth: true,
    role: []
  }
]

export default routesConfig
