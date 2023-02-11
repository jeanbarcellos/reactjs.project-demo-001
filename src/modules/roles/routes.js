import { lazy } from 'react'
import { createRoute } from 'utils/route'

const BASE_PATH = '/roles'

export const indexRoute = () => BASE_PATH
export const showRoute = id => `${BASE_PATH}/${id}`

const RolesPage = lazy(() => import('./pages/list'))

export default [
  createRoute(BASE_PATH, <RolesPage />)
]