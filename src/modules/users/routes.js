import { lazy } from 'react'
import { createRoute } from 'utils/route'

const BASE_PATH = '/users'

export const indexRoute = () => BASE_PATH
export const showRoute = id => `${BASE_PATH}/${id}`

const UsersPage = lazy(() => import('./pages/list'))

export default [
  createRoute(indexRoute(), <UsersPage />)
]
