import { lazy } from 'react'
import { createPublicRoute } from 'utils/route'

const BASE_PATH = '/auth'

// Paths
export const indexRoute = () => BASE_PATH
export const loginRoute = () => `/login`

// Paginas
const LoginPage = lazy(() => import('./pages/login'))

// Rotas
export default [
  createPublicRoute(loginRoute(), <LoginPage />)
]

