import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import Form from 'components/form/Form'
import TextField from 'components/form/TextField'
import _ from 'lodash'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import RoleModel from '../models/RoleModel'

const schema = yup.object().shape({
  name: yup.string().required('You must enter a name'),
  description: yup.string().required('You must enter a description')
})

const RoleForm = props => {
  const { data, onSubmit } = props

  const defaultValues = _.merge({}, RoleModel(), data)

  const { control, formState, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema)
  })

  const { isValid, dirtyFields, errors } = formState

  const canBeSubmitted = () => _.isEmpty(dirtyFields) || !isValid

  return (
    <Form name='loginForm' noValidate onSubmit={handleSubmit(onSubmit)} control={control} errors={errors}>
      <TextField name='name' label='Name' className='mt-8 mb-16' required fullWidth />

      <TextField
        name='description'
        label='Descrição'
        className='mt-8 mb-16'
        required
        fullWidth
        type='text'
        multiline
        rows={3}
      />

      <Button type='submit' variant='contained' disabled={canBeSubmitted()}>
        Salvar
      </Button>
    </Form>
  )
}

RoleForm.defaultProps = {
  data: null,
  onSubmit: () => {}
}

export default RoleForm
