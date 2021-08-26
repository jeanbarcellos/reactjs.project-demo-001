import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Page from 'components/page/Page'
import Tooltip from '@material-ui/core/Tooltip'
import PageTile from 'components/page/PageTile'
import { Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import withReducer from 'store/withReducer'
import reducers from './store'
import {
  selectAllCategories,
  getCategories,
  resetCategories,
  insertCategory,
  updateCategory,
  deleteCategory
} from './store/categoriesSlice'
import config from './config'
import useForm from 'hooks/useForm'
import { toStringDateTime } from 'utils/date'
import CategoryModel from './models/CategoryModel'
import DeleteDialog from 'components/dialog/DeleteDialog'
import OrderedTableHead from 'components/table/OrderedTableHead'
import useTable from 'hooks/useTable'

const header = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'createdAt', label: 'Created At' },
  { id: 'updatedAt', label: 'Updated At' },
  { id: 'actions', label: '', sort: false }
]

const initialStateDeleteDialog = { open: false, data: null }

const CategoriesPage = props => {
  const dispatch = useDispatch()

  const categories = useSelector(selectAllCategories)

  const { form, setForm, handleChange } = useForm(CategoryModel())

  const { order, handleRequestSort, getFilteredData } = useTable(0, 5, 'name')

  const [deleteDialog, setDeleteDialog] = useState(initialStateDeleteDialog)

  useEffect(() => {
    dispatch(resetCategories())
    dispatch(getCategories())
  }, [dispatch])

  const orderIteratee = o => {
    switch (order.id) {
      case 'id': {
        return parseInt(o.id, 10)
      }
      case 'name': {
        return o.name
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

  const handleEdit = category => ev => setForm(category)

  const handleDelete = category => ev => setDeleteDialog({ open: true, data: category })

  const onDelete = () => {
    dispatch(deleteCategory(deleteDialog.data))
    setDeleteDialog(initialStateDeleteDialog)
  }

  const onSave = () => {
    form.id === null ? dispatch(insertCategory(form)) : dispatch(updateCategory(form))

    setForm(CategoryModel())
  }

  return (
    <Page
      classes={{
        root: 'p-24 text-justify'
      }}
      header={<PageTile>Categories</PageTile>}
      content={
        <div>
          <div className='mb-24'>
            <div className='flex -mx-12'>
              <TextField
                className='mx-12 w-4/12'
                variant='outlined'
                label='Name'
                name='name'
                value={form.name}
                onChange={handleChange}
              />
              <Button
                startIcon={<Icon>add</Icon>}
                variant='contained'
                color='secondary'
                onClick={onSave}
                disabled={!form.name}
              >
                Save
              </Button>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table>
              <OrderedTableHead data={header} order={order} onRequestSort={handleRequestSort} />
              <TableBody>
                {categories.length === 0 && (
                  <TableRow>
                    <TableCell align='left' colSpan='5' className='text-center color-alert text-red'>
                      Não há categorias no momento
                    </TableCell>
                  </TableRow>
                )}
                {getFilteredData(categories, orderIteratee).map(row => (
                  <TableRow key={row.id}>
                    <TableCell align='left' className='w-48'>
                      {row.id}
                    </TableCell>
                    <TableCell align='left'>{row.name}</TableCell>
                    <TableCell align='left'>{toStringDateTime(row.createdAt)}</TableCell>
                    <TableCell align='left'>{toStringDateTime(row.updatedAt)}</TableCell>
                    <TableCell align='left' className='w-0 whitespace-nowrap'>
                      <Tooltip title='Edit'>
                        <IconButton color='secondary' onClick={handleEdit(row)}>
                          <Icon>edit</Icon>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title='Delete'>
                        <IconButton color='secondary' onClick={handleDelete(row)}>
                          <Icon>delete</Icon>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <DeleteDialog
            open={deleteDialog.open}
            onClose={() => setDeleteDialog(initialStateDeleteDialog)}
            onSubmit={onDelete}
            description={`Esta ação excluirá permanentemente a categoria ${
              deleteDialog.data ? '"' + deleteDialog.data.name + '"' : ''
            } do sistema!`}
          />
        </div>
      }
    />
  )
}

export default withReducer(config.reducerKey, reducers)(CategoriesPage)
