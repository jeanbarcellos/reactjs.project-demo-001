import reducer, {
  hideMessage,
  severity,
  showErrorMessage,
  showInfoMessage,
  showMessage,
  showSuccessMessage,
  showWarningMessage
} from './messageSlice'

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

test('should return the initial state', () => {
  const actual = undefined
  const expected = initialState

  expect(reducer(actual, {})).toEqual(expected)
})

test('should show message "This is a generic message!"', () => {
  const actual = initialState

  const message = 'This is a generic message!'

  const expected = {
    ...initialState,
    open: true,
    data: {
      ...initialState.data,
      message: message
    }
  }

  expect(reducer(actual, showMessage({ message: message }))).toEqual(expected)
})

test('should hide message', () => {
  const actual = {
    ...initialState,
    open: true
  }

  const expected = {
    ...initialState,
    open: false
  }

  expect(reducer(actual, hideMessage())).toEqual(expected)
})

const createExpectedToOpenSeverityMessage = (open, severity, message) => {
  return {
    ...initialState,
    open: true,
    data: {
      ...initialState.data,
      severity,
      message
    }
  }
}

test('should show success severity message with text "This is a success message!"', () => {
  const actual = initialState

  const message = 'This is a success message!'

  const expected = createExpectedToOpenSeverityMessage(true, severity.SUCCESS, message)

  expect(reducer(actual, showSuccessMessage(message))).toEqual(expected)
})

test('should show success severity message with text "This is a error message!"', () => {
  const actual = initialState

  const message = 'This is a error message!'

  const expected = createExpectedToOpenSeverityMessage(true, severity.ERROR, message)

  expect(reducer(actual, showErrorMessage(message))).toEqual(expected)
})

test('should show success severity message with text "This is a info message!"', () => {
  const actual = initialState

  const message = 'This is a info message!'

  const expected = createExpectedToOpenSeverityMessage(true, severity.INFO, message)

  expect(reducer(actual, showInfoMessage(message))).toEqual(expected)
})

test('should show success severity message with text "This is a warn message!"', () => {
  const actual = initialState

  const message = 'This is a warn message!'

  const expected = createExpectedToOpenSeverityMessage(true, severity.WARN, message)

  expect(reducer(actual, showWarningMessage(message))).toEqual(expected)
})
