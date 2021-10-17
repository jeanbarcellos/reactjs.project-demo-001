import React from 'react'
import Icon from '@material-ui/core/Icon'
import { Button, TextField } from '@material-ui/core'
import CategoryModel from '../models/CategoryModel'

const CategoryForm = props => {
  const { form, handleChange, onSave } = props

  return (
    <div className={props.className}>
      <div className='flex -mx-12'>
        <TextField
          className='mx-12 w-4/12'
          variant='outlined'
          label='Name'
          name='name'
          value={form.name}
          onChange={handleChange}
        />
        <Button
          startIcon={<Icon>add</Icon>}
          variant='contained'
          color='secondary'
          onClick={onSave}
          disabled={!form.name}
        >
          Save
        </Button>
      </div>
    </div>
  )
}

CategoryForm.defaultProps = {
  form: CategoryModel(),
  setForm: () => {},
  handleChange: () => {},
  onSave: () => {}
}

export default CategoryForm
