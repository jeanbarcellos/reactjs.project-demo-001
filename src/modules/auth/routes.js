import { lazy } from 'react'

const ROUTE_URL = '/auth'

export const indexRoute = () => ROUTE_URL

export const loginRoute = () => `/login`

const LoginPage = lazy(() => import('./pages/login'))

const routes = [
  {
    // path: ROUTE_URL,
    path: `/login`,
    element: <LoginPage />
  }
]

export default routes
