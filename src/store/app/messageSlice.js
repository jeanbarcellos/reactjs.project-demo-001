import { createSlice } from '@reduxjs/toolkit'

const reducerName = 'app/message'

export const severity = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARN: 'warning'
}

const initialState = {
  open: false,
  data: {
    severity: severity.INFO,
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
    hideMessage: (state, action) => {
      state.open = false
    },
    showSuccessMessage: (state, action) => {
      state.open = true
      state.data = createDataBySeverity(action, severity.SUCCESS)
    },
    showErrorMessage: (state, action) => {
      state.open = true
      state.data = createDataBySeverity(action, severity.ERROR)
    },
    showInfoMessage: (state, action) => {
      state.open = true
      state.data = createDataBySeverity(action, severity.INFO)
    },
    showWarningMessage: (state, action) => {
      state.open = true
      state.data = createDataBySeverity(action, severity.WARN)
    }
  }
})

export const selectOpenMessage = state => state.app.message.open
export const selectDataMessage = state => state.app.message.data

export const { showMessage, hideMessage, showSuccessMessage, showErrorMessage, showInfoMessage, showWarningMessage } =
  messageSlice.actions

export default messageSlice.reducer
