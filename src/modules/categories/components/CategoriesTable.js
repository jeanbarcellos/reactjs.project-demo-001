import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteDialog from 'components/dialog/DeleteDialog'
import OrderedTableHead from 'components/table/OrderedTableHead'
import useTable from 'hooks/useTable'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { toStringDateTime } from 'utils/date'

const header = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'createdAt', label: 'Created At' },
  { id: 'updatedAt', label: 'Updated At' },
  { id: 'actions', label: '', sort: false }
]

const initialStateDeleteDialog = { open: false, data: null }

const CategoriesTable = props => {
  const { data, onDelete, onEdit } = props

  const { order, handleRequestSort, getFilteredData } = useTable(0, 5, 'name')

  const [deleteDialog, setDeleteDialog] = useState(initialStateDeleteDialog)

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

  const handleEdit = category => () => onEdit(category)

  const handleDelete = category => () => setDeleteDialog({ open: true, data: category })

  const handleCloseDleteDialog = () => setDeleteDialog(initialStateDeleteDialog)

  const handleSubmitDeleteDialog = () => {
    setDeleteDialog(initialStateDeleteDialog)
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
            {getFilteredData(data, orderIteratee).map(row => (
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
