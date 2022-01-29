import { yupResolver } from '@hookform/resolvers/yup'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import _ from 'lodash'
import { submitLogin } from 'modules/auth/store/loginSlice'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'

const defaultValues = {
  email: '',
  password: ''
}

const schema = yup.object().shape({
  email: yup.string().email('Você deve inserir um e-mail válido.').required('Você deve inserir um e-mail.'),
  password: yup
    .string()
    .required('Por favor, insira sua senha.')
    .min(4, 'A senha é muito curta - deve ter no mínimo 4 caracteres.')
})

const LoginPage = () => {
  const dispatch = useDispatch()

  const { control, formState, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema)
  })

  const { isValid, dirtyFields, errors } = formState

  const onSubmit = model => {
    dispatch(submitLogin(model))
  }

  return (
    <Box component='form' name='loginForm' noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            margin='normal'
            id='email'
            label='E-mail'
            name='email'
            autoComplete='email'
            error={!!errors.email}
            helperText={errors?.email?.message}
            required
            fullWidth
            autoFocus
          />
        )}
      />

      <Controller
        name='password'
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            margin='normal'
            name='password'
            label='Senha'
            type='password'
            id='password'
            error={!!errors.password}
            helperText={errors?.password?.message}
            autoComplete='current-password'
            required
            fullWidth
          />
        )}
      />

      <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
      <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
        disabled={_.isEmpty(dirtyFields) || !isValid}
      >
        Login
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href='#' variant='body2'>
            Esqueceu a senha?
          </Link>
        </Grid>
        <Grid item>
          {'Não tem uma conta? '}
          <Link href='#' variant='body2'>
            {'Crie uma'}
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}
export default LoginPage
