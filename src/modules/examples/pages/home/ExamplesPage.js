import React from 'react'
import PageTile from 'components/page/PageTile'
import AlertsEx from '../../components/AlertsEx'
import TypographyEx from '../../components/TypographyEx'
import TableEx from '../../components/TableEx'

const ExamplesPage = () => {
  return (
    <div className='p-24 text-justify'>
      <PageTile>Examples and Tests</PageTile>
      <AlertsEx className='mb-24' />
      <TypographyEx className='mb-24' />
      <TableEx />
    </div>
  )
}

export default ExamplesPage
