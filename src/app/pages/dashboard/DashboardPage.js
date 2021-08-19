import React from 'react'
import PageTile from 'core/components/Page/PageTile'
import PageContentDemo from 'core/components/Page/PageContentDemo'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import {
  showMessage,
  showErrorMessage,
  showSuccessMessage,
  showInfoMessage,
  showWarningMessage
} from 'app/store/app/messageSlice'

const DashboardPage = () => {
  const dispatch = useDispatch()

  return (
    <div className='p-24 text-justify'>
      <PageTile>Dashboard</PageTile>
      <div className='mb-16 font-bold'>Alertas</div>
      <div className='mb-16'>
        <Button variant='outlined' onClick={() => dispatch(showMessage({ message: 'This is a success message!' }))}>
          Open generic
        </Button>
        <Button variant='outlined' onClick={() => dispatch(showSuccessMessage('This is a success message!'))}>
          Open success
        </Button>
        <Button variant='outlined' onClick={() => dispatch(showErrorMessage('This is a error message!'))}>
          Open Error
        </Button>
        <Button variant='outlined' onClick={() => dispatch(showInfoMessage('This is a info message!'))}>
          Open Info
        </Button>
        <Button variant='outlined' onClick={() => dispatch(showWarningMessage('This is a warn message!'))}>
          Open Warn
        </Button>
      </div>
      <PageContentDemo />
    </div>
  )
}

export default DashboardPage
