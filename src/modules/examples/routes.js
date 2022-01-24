import { lazy } from 'react'

const ROUTE_URL = '/examples'

export const indexRoute = () => ROUTE_URL

const ExamplesPage = lazy(() => import('./pages/home'))

const routes = [
  {
    path: ROUTE_URL,
    element: <ExamplesPage />
  }
]

export default routes
