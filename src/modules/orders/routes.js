import React from 'react'

const ROUTE_URL = '/orders'

const routes = [
  {
    path: ROUTE_URL,
    component: React.lazy(() => import('modules/orders')),
    exact: true
  }
]

export const indexRoute = () => ROUTE_URL

export default routes
