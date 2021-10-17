import { Button, TextField } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import React from 'react'
import CategoryModel from '../models/CategoryModel'

const CategoryForm = props => {
  const { form, handleChange, onSave, onCancel } = props

  return (
    <>
      <TextField
        className='mx-12 w-4/12'
        variant='outlined'
        label='Name'
        name='name'
        value={form.name}
        onChange={handleChange}
      />

      <Button startIcon={<Icon>add</Icon>} variant='contained' color='secondary' onClick={onSave} disabled={!form.name}>
        Save
      </Button>

      <Button
        startIcon={<Icon>cancel</Icon>}
        variant='contained'
        color='secondary'
        onClick={onCancel}
        disabled={!form.name}
        className='ml-12'
      >
        Cancel
      </Button>
    </>
  )
}

CategoryForm.defaultProps = {
  form: CategoryModel(),
  handleChange: () => {},
  onSave: () => {},
  onCancel: () => {}
}

export default CategoryForm
