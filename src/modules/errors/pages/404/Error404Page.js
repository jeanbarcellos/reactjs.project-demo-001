import React from 'react'
import ErrorDefault from '../../components/ErrorDefault'

const Error404Page = () => {
  return (
    <div className='p-24'>
      <ErrorDefault
        code={404}
        message='Desculpe, mas a página que você estava procurando não existe!'
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

export default Error404Page
