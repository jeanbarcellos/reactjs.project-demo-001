import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { useDispatch, useSelector } from 'react-redux'
import { closedDialog, selectOpenDialog, selectOptionsDialog } from 'store/app/dialogSlice'

const AppDialog = () => {
  const dispatch = useDispatch()

  const open = useSelector(selectOpenDialog)
  const options = useSelector(selectOptionsDialog)

  const handleClose = () => {
    dispatch(closedDialog())
  }

  return <Dialog open={open} onClose={handleClose} {...options} />
}

export default AppDialog
