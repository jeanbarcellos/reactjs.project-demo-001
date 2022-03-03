import { lazy } from 'react'
import { createRoute } from 'utils/route'

const ROUTE_URL = '/users'

export const indexRoute = () => ROUTE_URL

export const showRoute = id => `${ROUTE_URL}/${id}`

const UsersPage = lazy(() => import('./pages/list'))

const routes = [createRoute(ROUTE_URL, <UsersPage />)]

export default routes
