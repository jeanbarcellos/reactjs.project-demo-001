import React from 'react'
import ErrorDefault from '../../components/ErrorDefault'

const Error500Page = () => {
  return (
    <div className='p-24 text-center'>
      <ErrorDefault
        code={500}
        message='Desculpe-nos, mas estamos com um erro interno ...'
        text={
          <>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit turpis sed metus ullamcorper
            sagittis.
          </>
        }
      />
    </div>
  )
}

export default Error500Page
