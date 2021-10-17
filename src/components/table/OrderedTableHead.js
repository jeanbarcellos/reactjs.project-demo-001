import { makeStyles } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import clsx from 'clsx'
import { SortEnum } from 'enums'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {},
  head: {},
  row: {},
  cell: {},
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  }
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
                {order.id === row.id ? (
                  <span className={classes.visuallyHidden}>
                    {order.direction === SortEnum.DESCENDING ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
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
