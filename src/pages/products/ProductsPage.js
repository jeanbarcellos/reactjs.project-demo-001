import React from 'react'
import PageTile from 'components/page/PageTile'
import PageContentDemo from 'components/page/PageContentDemo'
import withReducer from 'store/withReducer'
import reducers from './store'
import config from './config'

const ProductsPage = () => {
  return (
    <div className='p-24 text-justify'>
      <PageTile>Products</PageTile>
      <PageContentDemo />
    </div>
  )
}

export default withReducer(config.reducerKey, reducers)(ProductsPage)
