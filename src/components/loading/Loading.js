import React from 'react'
import Typography from '@material-ui/core/Typography'
import { LinearProgress } from '@material-ui/core'
import clsx from 'clsx'

const Loading = props => {
  return (
    <div className={clsx('flex flex-1 flex-col items-center justify-center p-24', props.className)}>
      <Typography className='text-2xl mb-16'>Carregendo...</Typography>
      <LinearProgress className='w-xs' color='secondary' />
    </div>
  )
}

export default Loading
