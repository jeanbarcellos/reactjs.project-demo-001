import { indexRoute as categoryIndexRoute } from 'modules/categories/routes'
import { indexRoute as counterIndexRoute } from 'modules/counter/routes'
import { indexRoute as customresIndexRoute } from 'modules/customers/routes'
import { indexRoute as dashboardIndexRoute } from 'modules/dashboard/routes'
import { indexRoute as examplesIndexRoute } from 'modules/examples/routes'
import { indexRoute as ordersIndexRoute } from 'modules/orders/routes'
import { indexRoute as productsIndexRoute } from 'modules/products/routes'
import { indexRoute as reportsIndexRoute } from 'modules/reports/routes'

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
    id: 'orders',
    icon: 'shopping_cart',
    text: 'Orders',
    url: ordersIndexRoute()
  },
  {
    id: 'customers',
    icon: 'people',
    text: 'Customers',
    url: customresIndexRoute()
  },
  {
    id: 'reports',
    icon: 'bar_chart',
    text: 'Reports',
    url: reportsIndexRoute()
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
  }
]

export default navigationConfig
