import { lazy } from 'react'
import { Navigate } from 'react-router'

const ROUTE_URL = '/error'

export const indexRoute = () => ROUTE_URL

export const error403Route = () => `${ROUTE_URL}/403`

export const error404Route = () => `${ROUTE_URL}/404`

export const error505Route = () => `${ROUTE_URL}/505`

const Error404Page = lazy(() => import('./pages/404'))
const Error403Page = lazy(() => import('./pages/403'))
const Error500Page = lazy(() => import('./pages/500'))

const routes = [
  {
    path: ROUTE_URL,
    element: <Navigate to={error404Route()} />
  },
  {
    path: `${ROUTE_URL}/404`,
    element: <Error404Page />
  },
  {
    path: `${ROUTE_URL}/403`,
    element: <Error403Page />
  },
  {
    path: `${ROUTE_URL}/500`,
    element: <Error500Page />
  }
]

export default routes
