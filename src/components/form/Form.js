import React from 'react'
import Box from '@mui/material/Box'
import { FormProvider } from 'react-hook-form'
import _ from 'lodash'

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

  console.log('props', props)
  console.log('providerProps', providerProps)
  console.log('formProps', formProps)

  return (
    <FormProvider {...providerProps}>
      <Box component='form' {...formProps} />
    </FormProvider>
  )
}

export default Form
