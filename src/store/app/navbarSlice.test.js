import reducer, { closedNavbar, openedNavbar, toggledNavbar } from './navbarSlice'

const initialState = {
  open: true
}

test('should return the initial state', () => {
  const actual = undefined
  const expected = initialState

  expect(reducer(actual, {})).toEqual(expected)
})

test('should close navbar', () => {
  const actual = {
    open: true
  }

  const expected = {
    open: false
  }

  expect(reducer(actual, closedNavbar())).toEqual(expected)
})

test('should open navbar', () => {
  const actual = {
    open: false
  }

  const expected = {
    open: true
  }

  expect(reducer(actual, openedNavbar())).toEqual(expected)
})

test('should toggled the navbar from closed to opened', () => {
  const actual = {
    open: false
  }

  const expected = {
    open: true
  }

  expect(reducer(actual, toggledNavbar())).toEqual(expected)
})

test('should toggled the navbar from opened to closed', () => {
  const actual = {
    open: true
  }

  const expected = {
    open: false
  }

  expect(reducer(actual, toggledNavbar())).toEqual(expected)
})
