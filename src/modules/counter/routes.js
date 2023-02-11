import { lazy } from 'react'

const BASE_PATH = '/counter'

export const indexRoute = () => BASE_PATH

const CounterPage = lazy(() => import('./pages/home'))

export default [
  {
    path: BASE_PATH,
    element: <CounterPage />
  }
]
