import React, { useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import PageTile from 'components/page/PageTile'
import withReducer from 'store/withReducer'
import reducers from '../../store'
import config from '../../config'
import { useDispatch, useSelector } from 'react-redux'
import { resetProducts, getProducts, selectAllProducts } from '../../store/productsSlice'
import OrderedTableHead from 'components/table/OrderedTableHead'
import useTable from 'hooks/useTable'
import { toStringDateTime } from 'utils/date'

const header = [
  { id: 'id', label: 'ID' },
  { id: 'categoryId', label: 'Category' },
  { id: 'name', label: 'Name' },
  { id: 'description', label: 'Description' },
  { id: 'active', label: 'active' },
  { id: 'quantity', label: 'Quantity' },
  { id: 'value', label: 'Value' },
  { id: 'createdAt', label: 'Created At' },
  { id: 'updatedAt', label: 'Updated At' },
  { id: 'actions', label: '', sort: false }
]

const ProductsPage = () => {
  const dispatch = useDispatch()

  const products = useSelector(selectAllProducts)

  const { order, handleRequestSort, getFilteredData } = useTable(0, 5, 'name')

  useEffect(() => {
    dispatch(resetProducts())
    dispatch(getProducts())
  }, [dispatch])

  const orderIteratee = o => {
    switch (order.id) {
      case 'id': {
        return parseInt(o.id, 10)
      }
      case 'categoryId': {
        return o.categoryId
      }
      case 'name': {
        return o.name
      }
      case 'description': {
        return o.description
      }
      case 'active': {
        return o.active
      }
      case 'quantity': {
        return o.quantity
      }
      case 'value': {
        return o.value
      }
      case 'createdAt': {
        return o.createdAt
      }
      case 'updatedAt': {
        return o.updatedAt
      }
      default: {
        return o[order.id]
      }
    }
  }

  return (
    <div className='p-24 text-justify'>
      <PageTile>Products</PageTile>

      <Paper>
        <TableContainer>
          <Table size='medium'>
            <OrderedTableHead data={header} order={order} onRequestSort={handleRequestSort} />
            <TableBody>
              {getFilteredData(products, orderIteratee).map(row => {
                return (
                  <TableRow hover key={row.id}>
                    <TableCell align='left'>{row.id}</TableCell>
                    <TableCell align='left'>{row.categoryId}</TableCell>
                    <TableCell align='left'>{row.name}</TableCell>
                    <TableCell align='left'>{row.description}</TableCell>
                    <TableCell align='left'>{row.active ? 'Active' : 'Inactive'}</TableCell>
                    <TableCell align='left'>{row.quantity}</TableCell>
                    <TableCell align='left'>{row.value}</TableCell>
                    <TableCell align='left'>{toStringDateTime(row.createdAt)}</TableCell>
                    <TableCell align='left'>{toStringDateTime(row.updatedAt)}</TableCell>
                    <TableCell align='left'>-</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )
}

export default withReducer(config.reducerKey, reducers)(ProductsPage)
