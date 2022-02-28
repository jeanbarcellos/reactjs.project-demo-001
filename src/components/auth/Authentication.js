import { Component } from 'react'

class Authentication extends Component {
  state = {
    loaded: true
  }

  render() {
    return this.state.loaded ? <>{this.props.children}</> : <div></div>
  }
}

export default Authentication
