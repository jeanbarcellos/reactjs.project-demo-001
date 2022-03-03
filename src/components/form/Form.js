import Box from '@mui/material/Box'
import _ from 'lodash'
import React from 'react'
import { FormProvider } from 'react-hook-form'

const Form = props => {
  const providerProps = _.pick(props, [
    'watch',
    'getValues',
    'getFieldState',
    'setError',
    'clearErrors',
    'setValue',
    'trigger',
    'formState',
    'resetField',
    'reset',
    'handleSubmit',
    'unregister',
    'control',
    'register',
    'setFocus',
    'errors'
  ])
  const formProps = _.pick(props, ['noValidate', 'onSubmit', 'children'])

  return (
    <FormProvider {...providerProps}>
      <Box component='form' {...formProps} />
    </FormProvider>
  )
}

export default Form
