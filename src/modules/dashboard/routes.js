import React from 'react'

const ROUTE_URL = '/dashboard'

const routes = [
  {
    path: ROUTE_URL,
    component: React.lazy(() => import('./pages/home')),
    exact: true
  }
]

export const indexRoute = () => ROUTE_URL

export default routes
