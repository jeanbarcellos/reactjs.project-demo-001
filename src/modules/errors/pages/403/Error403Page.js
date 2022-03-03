import Page from 'components/page/Page'
import React from 'react'
import ErrorDefault from '../../components/ErrorDefault'

const Error403Page = () => {
  return (
    <Page
      classes={{
        root: 'p-24'
      }}
      content={
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
      }
    />
  )
}

export default Error403Page
