import React from 'react'
import { Navigate } from 'react-router-dom'

import { default as authRoutes } from 'modules/auth/routes'
import { default as dashboardRoutes, indexRoute as dashboardIndexRoute } from 'modules/dashboard/routes'
import { default as productsRoutes } from 'modules/products/routes'
import { default as categoryRoutes } from 'modules/categories/routes'
import { default as ordersRoutes } from 'modules/orders/routes'
import { default as customersRoutes } from 'modules/customers/routes'
import { default as reportsRoutes } from 'modules/reports/routes'
import { default as examplesRoutes } from 'modules/examples/routes'
import { default as counterRoutes } from 'modules/counter/routes'
import { default as errorsRoutes, error404Route } from 'modules/errors/routes'

const routesConfig = [
  {
    path: '/',
    element: <Navigate to={dashboardIndexRoute()} />
  },
  ...authRoutes,
  ...dashboardRoutes,
  ...categoryRoutes,
  ...productsRoutes,
  ...ordersRoutes,
  ...customersRoutes,
  ...reportsRoutes,
  ...examplesRoutes,
  ...counterRoutes,
  ...errorsRoutes,
  {
    path: '*',
    element: <Navigate to={error404Route()} />
  }
]

export default routesConfig
