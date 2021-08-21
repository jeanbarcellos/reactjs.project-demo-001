import React from 'react'
import { Redirect } from 'react-router-dom'

import { default as dashboardRoutes, indexRoute as indexDashboardRoute } from 'pages/dashboard/routes'
import { default as categoryRoutes } from 'pages/categories/routes'
import { default as productsRoutes } from 'pages/products/routes'
import { default as ordersRoutes } from 'pages/orders/routes'
import { default as customersRoutes } from 'pages/customers/routes'
import { default as reportsRoutes } from 'pages/reports/routes'
import { default as examplesRoutes } from 'pages/examples/routes'
import { default as counterRoutes } from 'pages/counter/routes'
import { default as errorsRoutes, error404Route } from 'pages/errors/routes'

const routesConfig = [
  {
    path: '/',
    component: () => <Redirect to={indexDashboardRoute()} />,
    exact: true
  },
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
    component: () => <Redirect to={error404Route()} />
  }
]

export default routesConfig
