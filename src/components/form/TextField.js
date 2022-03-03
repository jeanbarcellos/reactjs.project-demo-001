import MuiTextField from '@mui/material/TextField'
import _ from 'lodash'
import React from 'react'
import { Controller } from 'react-hook-form'
import withForm from './withForm'

const TextField = props => {
  const inputProps = _.pick(props, [
    'autoComplete',
    'autoFocus',
    'children',
    'className',
    'defaultValue',
    'disabled',
    'fullWidth',
    'id',
    'InputLabelProps',
    'inputProps',
    'InputProps',
    'inputRef',
    'label',
    'multiline',
    'name',
    'onBlur',
    'onChange',
    'onFocus',
    'placeholder',
    'required',
    'rows',
    'rowsMax',
    'type',
    'variant'
  ])

  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <MuiTextField
          {...field}
          {...inputProps}
          className='mt-8 mb-16'
          id={props.id}
          label={props.label}
          name={props.name}
          autoComplete={props.name}
          error={!!props.errors[props.name]}
          helperText={props.errors[props.name]?.message}
        />
      )}
    />
  )
}

TextField.defaultProps = {
  name: 'Name',
  label: 'Label',
  control: () => {},
  errors: {}
}

export default React.memo(withForm(TextField))
