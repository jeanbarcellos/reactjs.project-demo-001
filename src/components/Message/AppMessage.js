import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { hideMessage, selectOpenMessage, selectDataMessage } from 'store/app/messageSlice'

const Alert = props => <MuiAlert elevation={6} variant='filled' {...props} />

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(1)
    }
  }
}))

const AppMessage = () => {
  const classes = useStyles()
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
    <div className={classes.root}>
      <Snackbar {...data.options} open={open} onClose={handleClose}>
        <Alert onClose={handleClose} severity={data.severity}>
          {data.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default AppMessage
