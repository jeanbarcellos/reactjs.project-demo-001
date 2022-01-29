import { indexRoute as categoryIndexRoute } from 'modules/categories/routes'
import { indexRoute as counterIndexRoute } from 'modules/counter/routes'
import { indexRoute as dashboardIndexRoute } from 'modules/dashboard/routes'
import { indexRoute as examplesIndexRoute } from 'modules/examples/routes'
import { indexRoute as productsIndexRoute } from 'modules/products/routes'
import { loginRoute } from 'modules/auth/routes'

const navigationConfig = [
  {
    id: 'dashboard',
    icon: 'dashboard',
    text: 'Dashboard',
    url: dashboardIndexRoute()
  },
  {
    id: 'categories',
    icon: 'turned_in',
    text: 'Categories',
    url: categoryIndexRoute()
  },
  {
    id: 'products',
    icon: 'photo_library',
    text: 'Products',
    url: productsIndexRoute()
  },
  {
    id: 'integrations',
    icon: 'layers',
    text: 'Examples & Tests',
    url: examplesIndexRoute()
  },
  {
    id: 'counter',
    icon: 'hourglass_empty',
    text: 'Counter App',
    url: counterIndexRoute()
  },
  {
    id: 'login',
    icon: 'login',
    text: 'Login',
    url: loginRoute()
  }
]

export default navigationConfig
