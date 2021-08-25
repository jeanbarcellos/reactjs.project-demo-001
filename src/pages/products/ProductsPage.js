import React, { useEffect } from 'react'
import PageTile from 'components/page/PageTile'
import withReducer from 'store/withReducer'
import reducers from './store'
import config from './config'
import { useDispatch, useSelector } from 'react-redux'
import { resetProducts, getProducts, selectAllProducts } from './store/productsSlice'

const ProductsPage = () => {
  const dispatch = useDispatch()

  const products = useSelector(selectAllProducts)

  useEffect(() => {
    dispatch(resetProducts())
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className='p-24 text-justify'>
      <PageTile>Products</PageTile>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  )
}

export default withReducer(config.reducerKey, reducers)(ProductsPage)
