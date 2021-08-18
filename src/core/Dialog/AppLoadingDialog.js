import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import { LinearProgress } from '@material-ui/core'

const AppLoadingDialog = () => {
  const open = useSelector(state => state.app.dialog.loading.open)

  return (
    <Dialog
      open={open}
      classes={{
        paper: 'rounded-8'
      }}
    >
      <DialogContent className='pb-24 text-center'>
        <Typography className='text-2xl mb-16'>Carregendo...</Typography>
        <LinearProgress className='w-xs' color='secondary' />
      </DialogContent>
    </Dialog>
  )
}

export default AppLoadingDialog
