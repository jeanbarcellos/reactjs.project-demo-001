import { makeStyles } from 'tss-react/mui'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import clsx from 'clsx'
import { SortEnum } from 'enums'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles()(theme => ({
  root: {},
  head: {},
  row: {},
  cell: {}
}))

const OrderedTableHead = props => {
  const { data, order, onRequestSort } = props
  const classes = useStyles(props)

  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead className={classes.head}>
      <TableRow className={classes.row}>
        {data.map(row => (
          <TableCell
            className={clsx(classes.cell, row.className)}
            key={row.id}
            align={row.align}
            padding={row.disablePadding ? 'none' : 'normal'}
            sortDirection={order.id === row.id ? order.direction : false}
          >
            {row.sort || row.sort === undefined ? (
              <TableSortLabel
                active={order.id === row.id}
                direction={order.id === row.id ? order.direction : SortEnum.ASCENDING}
                onClick={createSortHandler(row.id)}
              >
                {row.label}
              </TableSortLabel>
            ) : (
              row.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

OrderedTableHead.defaultProps = {
  data: []
}

OrderedTableHead.propTypes = {
  data: PropTypes.array.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired
}

export default OrderedTableHead
