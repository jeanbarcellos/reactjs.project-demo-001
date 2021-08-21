import reducer, { closedDialog, closedLoadingDialog, openedDialog, openedLoadingDialog } from './dialogSlice'

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

test('should return the initial state', () => {
  const actual = undefined
  const expected = initialState

  expect(reducer(actual, {})).toEqual(expected)
})

test('should open dialog with text "Hello Test"', () => {
  const actual = { ...initialState }

  const message = 'Hello Test'

  const expected = {
    ...initialState,
    generic: {
      open: true,
      options: {
        children: message
      }
    }
  }

  expect(reducer(actual, openedDialog({ children: message }))).toEqual(expected)
})

test('should close dialog', () => {
  const actual = {
    ...initialState,
    generic: {
      ...initialState.generic,
      open: true
    }
  }

  const expected = {
    ...initialState,
    generic: {
      ...initialState.generic,
      open: false
    }
  }

  expect(reducer(actual, closedDialog())).toEqual(expected)
})

test('should open loading dialog', () => {
  const actual = { ...initialState }

  const expected = {
    ...initialState,
    loading: {
      open: true
    }
  }

  expect(reducer(actual, openedLoadingDialog())).toEqual(expected)
})

test('should close loading dialog', () => {
  const actual = {
    ...initialState,
    loading: {
      open: true
    }
  }

  const expected = {
    ...initialState,
    loading: {
      open: false
    }
  }

  expect(reducer(actual, closedLoadingDialog())).toEqual(expected)
})
