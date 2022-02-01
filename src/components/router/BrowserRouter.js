import { useLayoutEffect, useState } from 'react'
import { Router } from 'react-router'

// Link: https://stackoverflow.com/questions/69871987/react-router-v6-navigate-outside-of-components

const BrowserRouter = props => {
  const { history, basename, children, window } = props

  let [state, setState] = useState({
    action: history.action,
    location: history.location
  })

  useLayoutEffect(() => history.listen(setState), [history])

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  )
}

export default BrowserRouter
