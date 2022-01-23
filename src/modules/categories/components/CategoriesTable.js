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
import OrderedTableHead from 'components/table/OrderedTableHead'
import TablePagination from 'components/table/TablePagination'
import useTable from 'hooks/useTable'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { toStringDateTime } from 'utils/date'
import { createStateClosedDialog, createStateOpenedDialog } from 'utils/dialog'

const header = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'createdAt', label: 'Created At' },
  { id: 'updatedAt', label: 'Updated At' },
  { id: 'actions', label: '', sort: false }
]

const sortMap = {
  id: o => parseInt(o.id, 10),
  name: o => o.name,
  createdAt: o => o.createdAt,
  updatedAt: o => o.updatedAt
}

const CategoriesTable = props => {
  const { data, onDelete, onEdit } = props

  const { order, handleRequestSort, getFilteredData, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } =
    useTable(0, 5, 'id')

  const [deleteDialog, setDeleteDialog] = useState(createStateClosedDialog())

  const handleEdit = category => () => onEdit(category)

  const handleDelete = category => () => setDeleteDialog(createStateOpenedDialog(category))

  const handleCloseDleteDialog = () => setDeleteDialog(createStateClosedDialog())

  const handleSubmitDeleteDialog = () => {
    setDeleteDialog(createStateClosedDialog())
    onDelete(deleteDialog.data)
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <OrderedTableHead data={header} order={order} onRequestSort={handleRequestSort} />
          <TableBody>
            {data.length === 0 && (
              <TableRow>
                <TableCell align='left' colSpan={header.length} className='text-center color-alert text-red'>
                  Não há categorias no momento
                </TableCell>
              </TableRow>
            )}
            {getFilteredData(data, sortMap).map(row => (
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
        <TablePagination
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>

      <DeleteDialog
        open={deleteDialog.open}
        onClose={handleCloseDleteDialog}
        onSubmit={handleSubmitDeleteDialog}
        description={`Esta ação excluirá permanentemente a categoria ${
          deleteDialog.data ? '"' + deleteDialog.data.name + '"' : ''
        } do sistema!`}
      />
    </>
  )
}

CategoriesTable.propTypes = {
  data: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

CategoriesTable.defaultProps = {
  data: [],
  onEdit: () => {},
  onDelete: () => {}
}

export default CategoriesTable
