import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogAppBar from 'components/dialog/DialogAppBar'
import React from 'react'
import RoleForm from './RoleForm'

const RoleDialog = props => {
  const { open, data, onClose, onSubmit } = props

  const handleSubmit = model => {
    onSubmit(model)
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} classes={{ paper: 'rounded-8' }} fullWidth maxWidth='sm'>
      <DialogAppBar title={data ? 'Alterar perfil' : 'Cadastrar perfil'} onClose={handleClose} />
      <DialogContent>
        <RoleForm data={data} onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  )
}

RoleDialog.defaultProps = {
  open: false,
  data: null,
  onClose: () => {},
  onSubmit: () => {}
}

export default RoleDialog
