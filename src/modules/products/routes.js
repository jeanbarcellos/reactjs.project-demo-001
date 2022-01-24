import { lazy } from 'react'

const ROUTE_URL = '/products'

export const indexRoute = () => ROUTE_URL

const ProductsPage = lazy(() => import('./pages/list'))

const routes = [
  {
    path: ROUTE_URL,
    element: <ProductsPage />
  }
]

export default routes
