import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

const ErrorDefault = props => {
  const { code, message, text, backLink, backText, className } = props

  return (
    <div className={clsx('flex flex-col items-center justify-center', className)}>
      <Typography variant='h3' component='h3' className='mb-24'>
        Error {code}
      </Typography>
      <Typography variant='h5' color='textSecondary' className='mb-32'>
        {message}
      </Typography>
      {text && (
        <Typography className='mb-16 px-24 text-center'>
          {text}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit turpis sed metus ullamcorper sagittis.
          Maecenas aliquet finibus placerat. Nunc tristique at purus vel porta. Pellentesque nec erat id purus mattis
          posuere sed id mauris. Cras mauris elit, gravida quis gravida ac, ornare vel urna. Vestibulum sed est eu dolor
          ullamcorper varius. In euismod libero sit amet sem lacinia malesuada. Donec mattis est auctor mauris mollis
          tempor. Praesent rhoncus eros eget diam pharetra, nec fringilla odio rutrum. Suspendisse lacinia, eros et
          rhoncus mattis, diam eros maximus eros, vitae molestie nisl quam in odio.
        </Typography>
      )}
      <Link className='font-medium' to={backLink}>
        {backText}
      </Link>
    </div>
  )
}

ErrorDefault.defaultProps = {
  code: 400,
  message: 'Ocorreu algun erro',
  text: null,
  backLink: '/',
  backText: 'Voltar à página inicial'
}

export default ErrorDefault
