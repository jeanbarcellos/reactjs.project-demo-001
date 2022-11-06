import { createSlice } from '@reduxjs/toolkit'

const reducerKey = `navbar`
const reducerName = `app/${reducerKey}`

// Initial state

const initialState = {
  open: true
}

// Slice

const navbarSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    openedNavbar: (state, action) => {
      state.open = true
    },
    closedNavbar: (state, action) => {
      state.open = false
    },
    toggledNavbar: (state, action) => {
      state.open = !state.open
    }
  }
})

// Selectors

export const selectNavbarOpen = state => state.app[reducerKey].open

// Actions

export const { openedNavbar, closedNavbar, toggledNavbar } = navbarSlice.actions

// Redicer

export default navbarSlice.reducer
