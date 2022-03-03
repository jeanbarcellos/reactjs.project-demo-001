import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Tooltip from '@mui/material/Tooltip'
import DeleteDialog from 'components/dialog/DeleteDialog'
import Page from 'components/page/Page'
import PageTile from 'components/page/PageTile'
import OrderedTableHead from 'components/table/OrderedTableHead'
import TablePagination from 'components/table/TablePagination'
import useTable from 'hooks/useTable'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import withReducer from 'store/withReducer'
import { toStringDateTime } from 'utils/date'
import { createStateClosedDialog, createStateOpenedDialog } from 'utils/dialog'
import config from '../../config'
import reducers from '../../store'
import { deleteRole, getRoles, resetRoles, selectAllRoles } from '../../store/rolesSlice'
import RoleDialog from '../../components/RoleDialog'

const header = [
  { id: 'name', label: 'Name' },
  { id: 'description', label: 'Description' },
  { id: 'createdAt', label: 'Created At' },
  { id: 'updatedAt', label: 'Updated At' },
  { id: 'actions', label: '', sort: false }
]

const RolesPage = () => {
  const dispatch = useDispatch()

  const roles = useSelector(selectAllRoles)

  const [roleDialog, setRoleDialog] = useState(createStateClosedDialog())
  const [deleteDialog, setDeleteDialog] = useState(createStateClosedDialog())

  console.log('roleDialog', roleDialog)

  const { order, handleRequestSort, getFilteredData, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } =
    useTable(0, 5, 'name')

  useEffect(() => {
    dispatch(resetRoles())
    dispatch(getRoles())
  }, [dispatch])

  const handleCreate = () => {
    console.log('handleCreate')
    setRoleDialog(createStateOpenedDialog())
  }

  const handleEdit = role => () => {
    console.log('handleEdit')
    setRoleDialog(createStateOpenedDialog(role))
  }

  const handleDelete = role => () => {
    console.log('handleDelete')
    setDeleteDialog(createStateOpenedDialog(role))
  }

  const handleCloseDeleteDialog = () => {
    console.log('handleCloseDeleteDialog')
    setDeleteDialog(createStateClosedDialog())
  }

  const handleSubmitDeleteDialog = () => {
    console.log('handleSubmitDeleteDialog', deleteDialog.data)
    setDeleteDialog(createStateClosedDialog())
    // dispatch(deleteRole(deleteDialog.data))
  }

  return (
    <Page
      classes={{
        root: 'p-24'
      }}
      header={<PageTile>Roles</PageTile>}
      content={
        <>
          <div className='mb-24'>
            <Button startIcon={<Icon>add</Icon>} variant='contained' color='secondary' onClick={handleCreate}>
              New
            </Button>
          </div>

          <Paper>
            <TableContainer>
              <Table size='medium'>
                <OrderedTableHead data={header} order={order} onRequestSort={handleRequestSort} />
                <TableBody>
                  {getFilteredData(header, roles).map(row => {
                    return (
                      <TableRow hover key={row.id}>
                        <TableCell align='left'>{row.name}</TableCell>
                        <TableCell align='left'>{row.description}</TableCell>
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
                    )
                  })}
                </TableBody>
              </Table>
              <TablePagination
                count={roles.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Paper>

          <DeleteDialog
            open={deleteDialog.open}
            onClose={handleCloseDeleteDialog}
            onSubmit={handleSubmitDeleteDialog}
            description={`Esta ação excluirá permanentemente o perfil "${
              deleteDialog.data ? deleteDialog.data.name : ''
            }" do sistema!`}
          />

          <RoleDialog
            {...roleDialog}
            onClose={() => {
              console.log('RoleDialog.onClose')
              setRoleDialog(createStateClosedDialog())
            }}
            onSubmit={role => {
              console.log('RoleDialog.onSubmit', role)
              setRoleDialog(createStateClosedDialog())
            }}
          />
        </>
      }
    />
  )
}

export default withReducer(config.moduleKey, reducers)(RolesPage)
