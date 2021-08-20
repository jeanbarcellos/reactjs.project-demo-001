import React from 'react'
import PageTile from 'components/page/PageTile'
import PageContentDemo from 'components/page/PageContentDemo'

const ProductsPage = () => {
  return (
    <div className='p-24 text-justify'>
      <PageTile>Products</PageTile>
      <PageContentDemo />
    </div>
  )
}

export default ProductsPage
