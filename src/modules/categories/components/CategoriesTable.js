import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { toStringDateTime } from 'utils/date'

const CategoriesTable = props => {
  const { categories, handleEdit, handleDelete } = props

  return (
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
  )
}

CategoriesTable.defaultProps = {
  categories: [],
  handleEdit: () => {},
  handleDelete: () => {}
}

export default CategoriesTable
