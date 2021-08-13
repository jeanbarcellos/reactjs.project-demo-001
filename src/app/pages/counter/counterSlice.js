import { createSlice } from '@reduxjs/toolkit'

export const counterSlide = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // O Redux Toolkit nos permite escrever lógica "mutante" em redutores.
      // Na verdade, ele não altera o estado porque usa a biblioteca Immer,
      // que detecta mudanças para um "estado de rascunho" e produz um novo estado
      // imutável baseado nessas mudanças
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

// A função abaixo é chamada de thunk e nos permite executar lógica assíncrona.
// Ele pode ser despachado como uma ação normal: `dispatch (incrementAsync (10))`.
// Isso irá chamar o thunk com a função `dispatch` como o primeiro argumento.
// O código assíncrono pode então ser executado e outras ações podem ser despachadas
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const { increment, decrement, incrementByAmount } = counterSlide.actions

export default counterSlide.reducer
