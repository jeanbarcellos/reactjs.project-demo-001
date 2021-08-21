import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { useSelector } from 'react-redux'
import Loading from 'components/loading/Loading'
import { selectOpenLoadingDialog } from 'store/app/dialogSlice'

const AppLoadingDialog = () => {
  const open = useSelector(selectOpenLoadingDialog)

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
