import { lazy } from 'react'

const ROUTE_URL = '/customers'

export const indexRoute = () => ROUTE_URL

const CustomersPage = lazy(() => import('./pages/list'))

const routes = [
  {
    path: ROUTE_URL,
    element: <CustomersPage />
  }
]

export default routes
