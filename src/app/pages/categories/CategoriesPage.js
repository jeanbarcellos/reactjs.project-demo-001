import React, { useState } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Page from 'core/Page/Page'
import Tooltip from '@material-ui/core/Tooltip'
import PageTile from 'core/Page/PageTile'
import { Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { categoryAdded } from './categoriesSlice'
import Utils from 'core/utils'

const CategoriesPage = props => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories.entities)

  const [form, setForm] = useState({
    id: '',
    name: '',
    createdAt: '',
    updatedAt: ''
  })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleCreate = ev => {
    console.log('handleCreate')
  }

  const handleShow = category => ev => {
    console.log('handleShow', category)
  }

  const handleEdit = category => ev => {
    console.log('handleEdit', category)
  }

  const handleDelete = category => ev => {
    console.log('handleDelete', category)
  }

  const onAdd = ev => {
    dispatch(
      categoryAdded({
        ...form,
        id: Utils.generateID(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
    )
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
            <Button
              size='small'
              startIcon={<Icon>add</Icon>}
              variant='contained'
              color='secondary'
              onClick={handleCreate}
            >
              New category
            </Button>
          </div>

          <div className='mb-24'>
            <div className='flex -mx-12'>
              <TextField
                className='mx-12 w-4/12'
                variant='outlined'
                label='Nome'
                name='name'
                value={form.name}
                onChange={handleChange}
              />
              <Button size='small' startIcon={<Icon>add</Icon>} variant='contained' color='secondary' onClick={onAdd}>
                Add
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
                {categories.map(row => (
                  <TableRow key={row.id}>
                    <TableCell align='left' className='w-48'>
                      {row.id}
                    </TableCell>
                    <TableCell align='left'>{row.name}</TableCell>
                    <TableCell align='left'>{row.createdAt}</TableCell>
                    <TableCell align='left'>{row.updatedAt}</TableCell>
                    <TableCell align='left' className='w-0 whitespace-nowrap'>
                      <Tooltip title='Details'>
                        <IconButton color='secondary' onClick={handleShow(row)}>
                          <Icon>visibility</Icon>
                        </IconButton>
                      </Tooltip>

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

export default CategoriesPage
