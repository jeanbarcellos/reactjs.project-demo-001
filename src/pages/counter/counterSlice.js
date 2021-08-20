import { createSlice } from '@reduxjs/toolkit'
import config from './config'

const reducerName = `${config.reducerKey}/counter`

const initialState = {
  value: 0
}

export const counterSlide = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const { increment, decrement, incrementByAmount } = counterSlide.actions

export default counterSlide.reducer
