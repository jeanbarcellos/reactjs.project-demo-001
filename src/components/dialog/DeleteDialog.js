import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

const DeleteDialog = props => {
  const { open, title, description, onClose, onSubmit, textAgree, textDisagree } = props

  return (
    <Dialog open={open} aria-labelledby='responsive-dialog-title' aria-describedby='alert-dialog-description'>
      <DialogTitle id='responsive-dialog-title'>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{description}</DialogContentText>
      </DialogContent>

      <DialogActions id='alert-dialog-actions'>
        <Button onClick={onClose} color='primary'>
          {textDisagree}
        </Button>
        <Button onClick={onSubmit} color='primary' autoFocus>
          {textAgree}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

DeleteDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

DeleteDialog.defaultProps = {
  open: false,
  title: 'Você tem certeza?',
  description: 'Esta ação excluirá o objeto permanentemente do sistema!',
  textDisagree: 'Não, Cancelar',
  textAgree: 'Sim, eu tenho'
}

export default DeleteDialog
