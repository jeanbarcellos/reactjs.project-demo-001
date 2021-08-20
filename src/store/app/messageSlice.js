import { createSlice } from '@reduxjs/toolkit'

const reducerName = 'app/message'

const initialState = {
  open: false,
  data: {
    severity: 'info', // success, error, info, warning
    options: {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      autoHideDuration: 6000
    },
    message: 'Test'
  }
}

const createDataBySeverity = (action, severity) => {
  return {
    ...initialState.data,
    severity,
    message: action.payload
  }
}

const messageSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    showMessage: (state, action) => {
      state.open = true
      state.data = {
        ...initialState.data,
        severity: action.payload.severity || initialState.data.severity,
        message: action.payload.message || initialState.data.message
      }
    },
    showSuccessMessage: (state, action) => {
      state.open = true
      state.data = createDataBySeverity(action, 'success')
    },
    showErrorMessage: (state, action) => {
      state.open = true
      state.data = createDataBySeverity(action, 'error')
    },
    showInfoMessage: (state, action) => {
      state.open = true
      state.data = createDataBySeverity(action, 'info')
    },
    showWarningMessage: (state, action) => {
      state.open = true
      state.data = createDataBySeverity(action, 'warning')
    },
    hideMessage: (state, action) => {
      state.open = false
    }
  }
})

export const selectOpenMessage = state => state.app.message.open
export const selectDataMessage = state => state.app.message.data

export const { showMessage, hideMessage, showSuccessMessage, showErrorMessage, showInfoMessage, showWarningMessage } =
  messageSlice.actions

export default messageSlice.reducer
