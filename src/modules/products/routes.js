import { lazy } from 'react'
import Roles from 'services/auth/Roles'

const BASE_PATH = '/products'

export const indexRoute = () => BASE_PATH

const ProductsPage = lazy(() => import('./pages/list'))

export default [
  {
    path: BASE_PATH,
    element: <ProductsPage />,
    role: Roles.ROOT
  }
]
