import { lazy } from 'react'

const ROUTE_URL = '/auth'

export const indexRoute = () => ROUTE_URL

export const showRoute = id => `${ROUTE_URL}/${id}`

const LoginPage = lazy(() => import('./pages/login'))

const routes = [
  {
    // path: ROUTE_URL,
    path: `/login`,
    element: <LoginPage />
  }
]

export default routes
