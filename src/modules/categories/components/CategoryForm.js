import { Button, TextField } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import clsx from 'clsx'
import React from 'react'
import CategoryModel from '../models/CategoryModel'
import PropTypes from 'prop-types'

const CategoryForm = props => {
  const { form, handleChange, onSave, onCancel } = props

  return (
    <div className={clsx('flex -mx-12', props.className)}>
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
    </div>
  )
}

CategoryForm.propTypes = {
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

CategoryForm.defaultProps = {
  form: CategoryModel(),
  handleChange: () => {},
  onSave: () => {},
  onCancel: () => {}
}

export default CategoryForm
