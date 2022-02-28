import history from '@history'
import { createSlice } from '@reduxjs/toolkit'
import * as Api from 'api/authApi'
import { setUser } from 'store/app/auth/userSlice'
import { closedLoadingDialog, openedLoadingDialog } from 'store/app/dialogSlice'
import { showErrorMessage, showSuccessMessage } from 'store/app/messageSlice'
import config from '../config'

const reducerKey = `login`
const reducerName = `${config.moduleKey}/${reducerKey}`

export const submitLogin = formModel => async dispatch => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Api.authLogin(formModel)

    // dispatch(setUser(response.data.user))
    dispatch(setUser(response.data))
    dispatch(loginSuccess())
    dispatch(showSuccessMessage('Login realizado com sucesso! Redirecionando ...'))

    history.push('/')

    return response.data
  } catch (error) {
    const message = error.message || 'Erro ao realizar login'
    dispatch(showErrorMessage(message))
    dispatch(loginError(message))
  } finally {
    dispatch(closedLoadingDialog())
  }
}

const initialState = {
  success: false,
  error: null
}

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

export const { loginSuccess, loginError } = loginSlice.actions

export default loginSlice.reducer
