import React from 'react'
import { Redirect } from 'react-router'

const ROUTE_URL = '/error'

const routes = [
  {
    path: ROUTE_URL,
    component: () => <Redirect to={error404Route()} />,
    exact: true
  },
  {
    path: `${ROUTE_URL}/404`,
    component: React.lazy(() => import('./pages/404')),
    exact: true
  },
  {
    path: `${ROUTE_URL}/500`,
    component: React.lazy(() => import('./pages/500')),
    exact: true
  }
]

export const indexRoute = () => ROUTE_URL

export const error404Route = () => `${ROUTE_URL}/404`

export const error505Route = () => `${ROUTE_URL}/505`

export default routes
