import React from 'react'
import PageTile from 'components/page/PageTile'
import PageContentDemo from 'components/page/PageContentDemo'

const DashboardPage = () => {
  return (
    <div className='p-24 text-justify'>
      <PageTile>Dashboard</PageTile>
      <PageContentDemo />
    </div>
  )
}

export default DashboardPage
