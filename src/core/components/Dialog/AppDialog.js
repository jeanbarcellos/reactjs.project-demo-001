import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { useDispatch, useSelector } from 'react-redux'
import { closedDialog } from 'app/store/app/dialogSlice'

const AppDialog = () => {
  const dispatch = useDispatch()

  const open = useSelector(state => state.app.dialog.generic.open)
  const options = useSelector(state => state.app.dialog.generic.options)

  const handleClose = () => {
    dispatch(closedDialog())
  }

  return <Dialog open={open} onClose={handleClose} {...options} />
}

export default AppDialog
