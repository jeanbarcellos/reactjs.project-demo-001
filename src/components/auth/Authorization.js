import { Component } from 'react'

class Authorization extends Component {
  state = {
    loaded: true
  }

  render() {
    return this.state.loaded ? <>{this.props.children}</> : <div></div>
  }
}

export default Authorization
