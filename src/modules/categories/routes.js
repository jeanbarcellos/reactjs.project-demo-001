import { lazy } from 'react'

const ROUTE_URL = '/categories'

export const indexRoute = () => ROUTE_URL

export const showRoute = id => `${ROUTE_URL}/${id}`

const CategoriesPage = lazy(() => import('./pages/list'))

const routes = [
  {
    path: ROUTE_URL,
    element: <CategoriesPage />
  }
]

export default routes
