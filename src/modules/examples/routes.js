import { lazy } from 'react'

const BASE_PATH = '/examples'

export const indexRoute = () => BASE_PATH

const ExamplesPage = lazy(() => import('./pages/home'))

export default [
  {
    path: BASE_PATH,
    element: <ExamplesPage />
  }
]
