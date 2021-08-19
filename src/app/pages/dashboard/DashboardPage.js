import React from 'react'
import PageTile from 'core/components/Page/PageTile'
import PageContentDemo from 'core/components/Page/PageContentDemo'

const DashboardPage = () => {
  return (
    <div className='p-24 text-justify'>
      <PageTile>Dashboard</PageTile>
      <PageContentDemo />
    </div>
  )
}

export default DashboardPage
