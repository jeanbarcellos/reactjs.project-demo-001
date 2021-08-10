import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import DashboardPage from 'app/pages/DashboardPage'
import OrdersPage from 'app/pages/OrdersPage'
import CustomersPage from 'app/pages/CustomersPage'
import ReportsPage from 'app/pages/ReportsPage'
import IntegrationsPage from 'app/pages/IntegrationsPage'
import Error404Page from 'app/pages/Error404Page'

const Main = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/dashboard' />
      </Route>
      <Route path='/dashboard' component={DashboardPage} />
      <Route path='/orders' component={OrdersPage} />
      <Route path='/customers' component={CustomersPage} />
      <Route path='/reports' component={ReportsPage} />
      <Route path='/integrations' component={IntegrationsPage} />
      <Route component={Error404Page} />
    </Switch>
  )
}

export default Main
