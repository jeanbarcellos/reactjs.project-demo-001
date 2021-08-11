import React from 'react'
import { Redirect } from 'react-router-dom'

const routesConfig = [
  {
    path: '/',
    component: () => <Redirect to='/dashboard' />,
    exact: true
  },
  {
    path: '/dashboard',
    component: React.lazy(() => import('app/pages/dashboard/DashboardPage')),
    exact: true
  },
  {
    path: '/orders',
    component: React.lazy(() => import('app/pages/orders/OrdersPage')),
    exact: true
  },
  {
    path: '/customers',
    component: React.lazy(() => import('app/pages/customers/CustomersPage')),
    exact: true
  },
  {
    path: '/reports',
    component: React.lazy(() => import('app/pages/reports/ReportsPage')),
    exact: true
  },
  {
    path: '/integrations',
    component: React.lazy(() => import('app/pages/integrations/IntegrationsPage')),
    exact: true
  },
  {
    path: '/error/404',
    component: React.lazy(() => import('app/pages/errors/Error404Page')),
    exact: true
  },
  {
    component: () => <Redirect to='/error/404' />
  }
]

export default routesConfig
