import React from 'react'

const ROUTE_URL = '/categories'

const routes = [
  {
    path: ROUTE_URL,
    component: React.lazy(() => import('modules/categories')),
    exact: true
  }
]

export const indexRoute = () => ROUTE_URL

export const showRoute = id => `${ROUTE_URL}/${id}`

export default routes
