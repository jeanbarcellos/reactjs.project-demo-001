import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Page from 'core/components/Page/Page'
import Tooltip from '@material-ui/core/Tooltip'
import PageTile from 'core/components/Page/PageTile'
import { Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import withReducer from 'app/store/withReducer'
import reducers from './store'
import {
  selectAllCategories,
  fetchCategories,
  resetCategories,
  insertCategory,
  updateCategory,
  deleteCategory
} from './categoriesSlice'
import config from './config'
import CategoryModel from './CategoryModel'

const CategoriesPage = props => {
  const dispatch = useDispatch()
  const categories = useSelector(selectAllCategories)

  const [form, setForm] = useState(CategoryModel())
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  useEffect(() => {
    dispatch(resetCategories())
    dispatch(fetchCategories())
  }, [dispatch])

  const handleEdit = category => ev => {
    setForm(category)
  }

  const handleDelete = category => ev => {
    dispatch(deleteCategory(category))
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
              <TableHead>
                <TableRow>
                  <TableCell align='left'>ID</TableCell>
                  <TableCell align='left'>Name</TableCell>
                  <TableCell align='left'>Created At</TableCell>
                  <TableCell align='left'>Updated At</TableCell>
                  <TableCell align='left'></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categories.length === 0 && (
                  <TableRow>
                    <TableCell align='left' colSpan='5' className='text-center color-alert text-red'>
                      Não há categorias no momento
                    </TableCell>
                  </TableRow>
                )}
                {categories.map(row => (
                  <TableRow key={row.id}>
                    <TableCell align='left' className='w-48'>
                      {row.id}
                    </TableCell>
                    <TableCell align='left'>{row.name}</TableCell>
                    <TableCell align='left'>{row.createdAt}</TableCell>
                    <TableCell align='left'>{row.updatedAt}</TableCell>
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
        </div>
      }
    />
  )
}

export default withReducer(config.reducerKey, reducers)(CategoriesPage)
