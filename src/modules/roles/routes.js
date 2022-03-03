import { lazy } from 'react'
import { createRoute } from 'utils/route'

const ROUTE_URL = '/roles'

export const indexRoute = () => ROUTE_URL

export const showRoute = id => `${ROUTE_URL}/${id}`

const RolesPage = lazy(() => import('./pages/list'))

const routes = [createRoute(ROUTE_URL, <RolesPage />)]

export default routes
