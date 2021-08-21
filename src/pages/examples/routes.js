import React from 'react'

const ROUTE_URL = '/examples'

const routes = [
  {
    path: ROUTE_URL,
    component: React.lazy(() => import('pages/examples')),
    exact: true
  }
]

export const indexRoute = () => ROUTE_URL

export default routes
