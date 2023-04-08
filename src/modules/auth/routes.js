import { lazy } from 'react'
import { logoutUser } from 'store/app/auth/userSlice'
import { createPublicRoute } from 'utils/route'

const BASE_PATH = '/auth'

// Paths
export const indexRoute = () => BASE_PATH
export const loginRoute = () => `/login`
export const logoutRoute = () => dispatch(logoutUser())


// Paginas
const LoginPage = lazy(() => import('./pages/login'))

// Rotas
export default [
  createPublicRoute(loginRoute(), <LoginPage />)
]

