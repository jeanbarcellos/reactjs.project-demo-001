import styled from '@emotion/styled'
import MuiAlert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideMessage, selectDataMessage, selectOpenMessage } from 'store/app/messageSlice'

const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const Root = styled('div')(({ theme, config }) => ({
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(1)
  }
}))

const AppMessage = () => {
  const dispatch = useDispatch()

  const open = useSelector(selectOpenMessage)
  const data = useSelector(selectDataMessage)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(hideMessage())
  }

  return (
    <Root>
      <Snackbar {...data.options} open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity={data.severity}>
          {data.message}
        </Alert>
      </Snackbar>
    </Root>
  )
}

export default AppMessage
