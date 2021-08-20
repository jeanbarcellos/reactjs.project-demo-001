import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { useSelector } from 'react-redux'
import Loading from 'components/loading'

const AppLoadingDialog = () => {
  const open = useSelector(state => state.app.dialog.loading.open)

  return (
    <Dialog
      open={open}
      classes={{
        paper: 'rounded-8'
      }}
    >
      <Loading />
    </Dialog>
  )
}

export default AppLoadingDialog
