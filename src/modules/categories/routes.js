import { lazy } from 'react'

const BASE_PATH = '/categories'

export const indexRoute = () => BASE_PATH
export const showRoute = id => `${BASE_PATH}/${id}`

const CategoriesPage = lazy(() => import('./pages/list'))

export default [
  {
    path: BASE_PATH,
    element: <CategoriesPage />
  }
]
