import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import EnhancedTableHead from './EnhancedTableHead'
import useTable from 'hooks/useTable'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const header = [
  { id: 'name', align: 'left', disablePadding: false, label: 'Dessert (100g serving)', sort: true },
  { id: 'calories', align: 'right', disablePadding: false, label: 'Calories', sort: false },
  { id: 'fat', align: 'right', disablePadding: false, label: 'Fat (g)', sort: true },
  { id: 'carbs', align: 'right', disablePadding: false, label: 'Carbs (g)', sort: true },
  { id: 'protein', align: 'right', disablePadding: false, label: 'Protein (g)', sort: true }
]

const rows = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Jelly Bean', 375, 0.0, 94, 0.0),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Nougat', 360, 19.0, 9, 37.0),
  createData('Oreo', 437, 18.0, 63, 4.0)
]

const EnhancedTable = () => {
  const { order, page, rowsPerPage, handleRequestSort, handleChangePage, handleChangeRowsPerPage, getFilteredData } =
    useTable()

  const orderIteratee = o => {
    switch (order.id) {
      case 'id': {
        return parseInt(o.id, 10)
      }
      case 'name': {
        return o.name
      }
      case 'calories': {
        return o.calories
      }
      case 'fat': {
        return o.fat
      }
      case 'carbs': {
        return o.carbs
      }
      default: {
        return o[order.id]
      }
    }
  }

  return (
    <div>
      <Paper>
        <TableContainer>
          <Table size='medium'>
            <EnhancedTableHead data={header} order={order} onRequestSort={handleRequestSort} />
            <TableBody>
              {getFilteredData(rows, orderIteratee).map(row => {
                return (
                  <TableRow hover key={row.name}>
                    <TableCell align='left'>{row.name}</TableCell>
                    <TableCell align='right'>{row.calories}</TableCell>
                    <TableCell align='right'>{row.fat}</TableCell>
                    <TableCell align='right'>{row.carbs}</TableCell>
                    <TableCell align='right'>{row.protein}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}

export default EnhancedTable
