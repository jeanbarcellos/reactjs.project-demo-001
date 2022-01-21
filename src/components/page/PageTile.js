import React from 'react'
import Typography from '@mui/material/Typography'

const PageTile = props => {
  return (
    <Typography variant='h3' component='h3' className='mb-24'>
      {props.children}
    </Typography>
  )
}

export default PageTile
