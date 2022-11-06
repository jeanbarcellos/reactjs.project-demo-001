import { createSlice } from '@reduxjs/toolkit'

const reducerKey = `dialog`
const reducerName = `app/${reducerKey}`

// Initial state

const initialState = {
  generic: {
    open: false,
    options: {
      children: 'Hello World'
    }
  },
  loading: {
    open: false
  }
}

// Slice

const dialogSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    openedDialog: (state, action) => {
      state.generic.open = true
      state.generic.options = action.payload
    },
    closedDialog: (state, action) => {
      state.generic.open = false
    },
    openedLoadingDialog: (state, action) => {
      state.loading.open = true
    },
    closedLoadingDialog: (state, action) => {
      state.loading.open = false
    }
  }
})

// Selectors

export const selectOpenDialog = state => state.app[reducerKey].generic.open

export const selectOptionsDialog = state => state.app[reducerKey].generic.open

export const selectOpenLoadingDialog = state => state.app[reducerKey].loading.open

// Actions

export const { openedDialog, closedDialog, openedLoadingDialog, closedLoadingDialog } = dialogSlice.actions

// Reducer

export default dialogSlice.reducer
