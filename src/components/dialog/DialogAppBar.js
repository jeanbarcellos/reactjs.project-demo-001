import AppBar from '@mui/material/AppBar'
import Icon from '@mui/material/Icon'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React from 'react'

const DialogAppBar = props => {
  const { title, onClose } = props

  return (
    <AppBar position='static' elevation={0}>
      <Toolbar className='flex w-full'>
        <Typography className='flex flex-1 w-full my-6' variant='subtitle1' color='inherit'>
          {title}
        </Typography>
        {onClose && (
          <IconButton className='ml-16 -mr-16' color='inherit' onClick={onClose}>
            <Icon>close</Icon>
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  )
}

DialogAppBar.propTypes = {
  title: PropTypes.string.isRequired
}

DialogAppBar.defaultProps = {
  onClose: null
}

export default DialogAppBar
