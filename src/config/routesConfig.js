import React from 'react'
import { Redirect } from 'react-router-dom'
import { default as categoryRoutes } from 'pages/categories/routes'

const routesConfig = [
  {
    path: '/',
    component: () => <Redirect to='/dashboard' />,
    exact: true
  },
  {
    path: '/dashboard',
    component: React.lazy(() => import('pages/dashboard')),
    exact: true
  },
  ...categoryRoutes,
  {
    path: '/products',
    component: React.lazy(() => import('pages/products')),
    exact: true
  },
  {
    path: '/orders',
    component: React.lazy(() => import('pages/orders')),
    exact: true
  },
  {
    path: '/customers',
    component: React.lazy(() => import('pages/customers')),
    exact: true
  },
  {
    path: '/reports',
    component: React.lazy(() => import('pages/reports')),
    exact: true
  },
  {
    path: '/examples',
    component: React.lazy(() => import('pages/examples')),
    exact: true
  },
  {
    path: '/error/404',
    component: React.lazy(() => import('pages/errors')),
    exact: true
  },
  {
    path: '/counter',
    component: React.lazy(() => import('pages/counter')),
    exact: true
  },
  {
    component: () => <Redirect to='/error/404' />
  }
]

export default routesConfig
