import React, { useState } from 'react'

const Authentication = props => {
  const [loaded] = useState(true)

  return loaded ? <>{props.children}</> : <div></div>
}

export default Authentication
