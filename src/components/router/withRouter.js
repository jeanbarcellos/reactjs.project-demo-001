import { useLocation, useNavigate } from 'react-router-dom'

// link: https://github.com/remix-run/react-router/issues/7156
// link: https://gist.github.com/sibelius/7d760fa16a121ec0f4cd8b143a59bee6

const withRouter = Component => props => {
  const location = useLocation()
  const navigate = useNavigate()

  return <Component {...props} navigate={navigate} location={location} />
}

export default withRouter
