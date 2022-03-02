import history from '@history'
import withRouter from 'components/router/withRouter'
import routes from 'config/routesConfig'
import { Component } from 'react'
import { connect } from 'react-redux'
import { matchRoutes } from 'react-router'
import { hasAuth } from 'utils/security'

class Authorization extends Component {
  state = {
    accessGranted: true
  }

  componentDidMount() {
    if (!this.state.accessGranted) {
      this.redirectRoute()
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.accessGranted !== this.state.accessGranted
  }

  componentDidUpdate() {
    if (!this.state.accessGranted) {
      this.redirectRoute()
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { location, userAuthenticated, userRoles } = props
    const { pathname } = location

    const matchedRoutes = matchRoutes(routes, pathname)
    const matchedRoute = matchedRoutes ? matchedRoutes[0] : false

    return {
      accessGranted: matchedRoute
        ? hasAuth(matchedRoute.route.auth, matchedRoute.route.role, userAuthenticated, userRoles)
        : false
    }
  }

  redirectRoute() {
    const { location, navigate, userRoles, userAuthenticated } = this.props
    const { pathname } = location

    if (!userAuthenticated) {
      history.push('/login')
    } else {
      history.push('/error/403')
    }
  }

  render() {
    return this.state.accessGranted ? <>{this.props.children}</> : <div></div>
  }
}

const mapStateToProps = state => {
  return {
    userAuthenticated: state.app.auth.user.data !== null,
    userRoles: state.app.auth.user.data?.roles || []
  }
}

export default withRouter(connect(mapStateToProps)(Authorization))
