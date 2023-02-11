import { lazy } from 'react'
import { Navigate } from 'react-router'

const BASE_PATH = '/error'

// Paths
export const indexRoute = () => BASE_PATH
export const error403Route = () => `${BASE_PATH}/403`
export const error404Route = () => `${BASE_PATH}/404`
export const error500Route = () => `${BASE_PATH}/500`

// Páginas
const Error404Page = lazy(() => import('./pages/404'))
const Error403Page = lazy(() => import('./pages/403'))
const Error500Page = lazy(() => import('./pages/500'))

// Rotas
export default [
  {
    path: BASE_PATH,
    element: <Navigate to={error404Route()} />
  },
  {
    path: error404Route(),
    element: <Error404Page />
  },
  {
    path: error403Route(),
    element: <Error403Page />
  },
  {
    path: error500Route(),
    element: <Error500Page />
  }
]
