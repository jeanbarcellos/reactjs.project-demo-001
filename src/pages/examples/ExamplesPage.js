import React from 'react'
import PageTile from 'components/Page/PageTile'
import AlertsEx from './AlertsEx'
import TypographyEx from './TypographyEx'

const ExamplesPage = () => {
  return (
    <div className='p-24 text-justify'>
      <PageTile>Examples and Tests</PageTile>
      <AlertsEx className='mb-24' />
      <TypographyEx className='mb-24' />
    </div>
  )
}

export default ExamplesPage
