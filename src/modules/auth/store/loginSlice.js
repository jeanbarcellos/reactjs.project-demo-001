import history from '@history'
import { createSlice } from '@reduxjs/toolkit'
import jwtService from 'services/jwt/JwtService'
import { setUser } from 'store/app/auth/userSlice'
import { closedLoadingDialog, openedLoadingDialog } from 'store/app/dialogSlice'
import { showErrorMessage, showSuccessMessage } from 'store/app/messageSlice'
import config from '../config'

const reducerKey = `login`
const reducerName = `${config.moduleKey}/${reducerKey}`

export const submitLogin = formModel => async dispatch => {
  try {
    dispatch(openedLoadingDialog())

    const data = await jwtService.login(formModel.email, formModel.password)

    dispatch(setUser(data))
    dispatch(loginSuccess())
    dispatch(showSuccessMessage('Login realizado com sucesso! Redirecionando ...'))

    history.push('/')

    return data
  } catch (error) {
    const message = error.message || 'Erro ao realizar login'
    dispatch(showErrorMessage(message))
    dispatch(loginError(message))
  } finally {
    dispatch(closedLoadingDialog())
  }
}

// Initial State

const initialState = {
  success: false,
  error: null
}

// Slice

const loginSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.success = true
      state.error = null
    },
    loginError: (state, action) => {
      state.success = false
      state.error = action.payload
    }
  },
  extraReducers: {}
})

// Actions

export const { loginSuccess, loginError } = loginSlice.actions

// Reducer

export default loginSlice.reducer
