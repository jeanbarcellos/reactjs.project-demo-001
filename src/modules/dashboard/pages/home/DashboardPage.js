import Page from 'components/page/Page'
import PageContentDemo from 'components/page/PageContentDemo'
import PageTile from 'components/page/PageTile'
import React from 'react'

const DashboardPage = () => {
  return (
    <Page
      classes={{
        root: 'p-24'
      }}
      header={<PageTile>Dashboard</PageTile>}
      content={<PageContentDemo />}
    />
  )
}

export default DashboardPage
