import Page from 'components/page/Page'
import PageTile from 'components/page/PageTile'
import React from 'react'
import AlertsEx from '../../components/AlertsEx'
import TableEx from '../../components/TableEx'
import TypographyEx from '../../components/TypographyEx'

const ExamplesPage = () => {
  return (
    <Page
      classes={{
        root: 'p-24'
      }}
      header={<PageTile>Examples and Tests</PageTile>}
      content={
        <>
          <AlertsEx className='mb-24' />
          <TypographyEx className='mb-24' />
          <TableEx />
        </>
      }
    />
  )
}

export default ExamplesPage
