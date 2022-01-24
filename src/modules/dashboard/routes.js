import { lazy } from 'react'

const ROUTE_URL = '/dashboard'

export const indexRoute = () => ROUTE_URL

const HomePage = lazy(() => import('./pages/home'))

const routes = [
  {
    path: ROUTE_URL,
    element: <HomePage />
  }
]

export default routes
