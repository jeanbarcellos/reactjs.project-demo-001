import Page from 'components/page/Page'
import React from 'react'
import ErrorDefault from '../../components/ErrorDefault'

const Error500Page = () => {
  return (
    <Page
      classes={{
        root: 'p-24'
      }}
      content={
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
      }
    />
  )
}

export default Error500Page
