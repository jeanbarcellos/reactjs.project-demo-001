import { lazy } from 'react'

const ROUTE_URL = '/reports'

export const indexRoute = () => ROUTE_URL

const ReportsPage = lazy(() => import('./pages/list'))

const routes = [
  {
    path: ROUTE_URL,
    element: <ReportsPage />
  }
]

export default routes
