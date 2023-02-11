import { lazy } from 'react'

const BASE_PATH = '/dashboard'

export const indexRoute = () => BASE_PATH

const HomePage = lazy(() => import('./pages/home'))

export default [
  {
    path: BASE_PATH,
    element: <HomePage />
  }
]