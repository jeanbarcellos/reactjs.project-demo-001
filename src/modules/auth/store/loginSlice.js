import { createSlice } from '@reduxjs/toolkit'
import config from '../config'

const reducerKey = `login`
const reducerName = `${config.moduleKey}/${reducerKey}`

export const submitLogin = formModel => async dispatch => {
  console.log(formModel)

  dispatch('formModwl', loginSuccess())
}

const initialState = {
  success: false,
  error: null
}

const loginSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    loginSucess: (state, action) => {
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

export default loginSlice.reducer
