import { lazy } from 'react'
import Roles from 'services/auth/Roles'

const ROUTE_URL = '/products'

export const indexRoute = () => ROUTE_URL

const ProductsPage = lazy(() => import('./pages/list'))

const routes = [
  {
    path: ROUTE_URL,
    element: <ProductsPage />,
    role: Roles.ROOT
  }
]

export default routes
