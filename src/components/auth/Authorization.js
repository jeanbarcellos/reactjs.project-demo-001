import React, { useState } from 'react'

const Authorization = props => {
  const [loaded] = useState(true)

  return loaded ? <>{props.children}</> : <div></div>
}

export default Authorization
