import { Typography } from '@mui/material'
import React from 'react'

const Subtitle = props => {
  return (
    <Typography variant='h5' className='mb-24 font-bold py-4 border-b'>
      {props.children}
    </Typography>
  )
}

export default Subtitle
