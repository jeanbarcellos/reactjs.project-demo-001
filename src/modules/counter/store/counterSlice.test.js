import reducer, { increment, decrement, incrementByAmount } from './counterSlice'

describe('counter reducer', () => {
  const initialState = {
    value: 3
  }

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual({
      value: 0
    })
  })

  it('should handle increment', () => {
    const actual = reducer(initialState, increment())
    const expected = 4
    expect(actual.value).toEqual(expected)
  })

  it('should handle decrement', () => {
    const actual = reducer(initialState, decrement())
    const expected = 2
    expect(actual.value).toEqual(expected)
  })

  it('should handle incrementByAmount', () => {
    const actual = reducer(initialState, incrementByAmount(2))
    const expected = 5
    expect(actual.value).toEqual(expected)
  })
})
