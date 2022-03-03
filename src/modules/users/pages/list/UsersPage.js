import Page from 'components/page/Page'
import PageContentDemo from 'components/page/PageContentDemo'
import PageTile from 'components/page/PageTile'
import React from 'react'
import withReducer from 'store/withReducer'
import config from '../../config'
import reducers from '../../store'

const UserPage = () => {
  return (
    <Page
      classes={{
        root: 'p-24 text-justify'
      }}
      header={<PageTile>Users</PageTile>}
      content={<PageContentDemo />}
    />
  )
}

export default withReducer(config.moduleKey, reducers)(UserPage)
