import { lazy } from 'react'

const ROUTE_URL = '/counter'

export const indexRoute = () => ROUTE_URL

const CounterPage = lazy(() => import('./pages/home'))

const routes = [
  {
    path: ROUTE_URL,
    element: <CounterPage />
  }
]

export default routes
