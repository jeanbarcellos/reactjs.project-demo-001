import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogAppBar from 'components/dialog/DialogAppBar'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeDialog, selectDialog, upsertRole } from '../store/rolesSlice'
import RoleForm from './RoleForm'

const RoleDialog = props => {
  const dispatch = useDispatch()

  const dialog = useSelector(selectDialog)

  const onClose = () => {
    dispatch(closeDialog())
  }

  const onSubmit = model => {
    dispatch(closeDialog())
    dispatch(upsertRole(model))
  }

  return (
    <Dialog open={dialog.open} classes={{ paper: 'rounded-8' }} fullWidth maxWidth='sm'>
      <DialogAppBar title={dialog.data ? 'Alterar perfil' : 'Cadastrar perfil'} onClose={onClose} />
      <DialogContent>
        <RoleForm data={dialog.data} onSubmit={onSubmit} />
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
