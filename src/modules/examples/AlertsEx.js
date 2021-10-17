import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import {
  showMessage,
  showErrorMessage,
  showSuccessMessage,
  showInfoMessage,
  showWarningMessage
} from 'store/app/messageSlice'
import Subtitle from './Subtitle'

const AlertsEx = props => {
  const dispatch = useDispatch()

  return (
    <div className={props.className}>
      <Subtitle>Alertas</Subtitle>
      <div className='-mx-4'>
        <Button
          variant='outlined'
          color='secondary'
          className='mx-4'
          onClick={() => dispatch(showMessage({ message: 'This is a success message!' }))}
        >
          Open generic
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          className='mx-4'
          onClick={() => dispatch(showSuccessMessage('This is a success message!'))}
        >
          Open success
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          className='mx-4'
          onClick={() => dispatch(showErrorMessage('This is a error message!'))}
        >
          Open Error
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          className='mx-4'
          onClick={() => dispatch(showInfoMessage('This is a info message!'))}
        >
          Open Info
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          className='mx-4'
          onClick={() => dispatch(showWarningMessage('This is a warn message!'))}
        >
          Open Warn
        </Button>
      </div>
    </div>
  )
}

export default AlertsEx
