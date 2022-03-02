import React from 'react'
import ErrorDefault from '../../components/ErrorDefault'

const Error403Page = () => {
  return (
    <div className='p-24'>
      <ErrorDefault
        code={403}
        message='Desculpe, você não tem permissão para acessar esta página!'
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

export default Error403Page
