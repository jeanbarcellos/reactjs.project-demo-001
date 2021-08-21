import React from 'react'

const ROUTE_URL = '/customers'

const routes = [
  {
    path: ROUTE_URL,
    component: React.lazy(() => import('pages/customers')),
    exact: true
  }
]

export const indexRoute = () => ROUTE_URL

export default routes
