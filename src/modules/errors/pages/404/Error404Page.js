import Page from 'components/page/Page'
import React from 'react'
import ErrorDefault from '../../components/ErrorDefault'

const Error404Page = () => {
  return (
    <Page
      classes={{
        root: 'p-24'
      }}
      content={
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
      }
    />
  )
}

export default Error404Page
