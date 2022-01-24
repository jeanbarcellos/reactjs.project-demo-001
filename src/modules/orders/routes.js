import { lazy } from 'react'

const ROUTE_URL = '/orders'

export const indexRoute = () => ROUTE_URL

const OrdersPage = lazy(() => import('./pages/list'))

const routes = [
  {
    path: ROUTE_URL,
    element: <OrdersPage />
  }
]

export default routes
