import { createSlice } from '@reduxjs/toolkit'

const reducerName = 'app/dialog'

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

export const selectOpenDialog = state => state.app.dialog.generic.open
export const selectOptionsDialog = state => state.app.dialog.generic.open
export const selectOpenLoadingDialog = state => state.app.dialog.loading.open

export const { openedDialog, closedDialog, openedLoadingDialog, closedLoadingDialog } = dialogSlice.actions

export default dialogSlice.reducer
