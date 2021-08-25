import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
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

export function EnhancedTableHead(props) {
  const { data, order, onRequestSort } = props
  const classes = useStyles()

  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {data.map(row => (
          <TableCell
            key={row.id}
            align={row.align}
            padding={row.disablePadding ? 'none' : 'normal'}
            sortDirection={order.id === row.id ? order.direction : false}
          >
            {row.sort ? (
              <TableSortLabel
                active={order.id === row.id}
                direction={order.id === row.id ? order.direction : 'asc'}
                onClick={createSortHandler(row.id)}
              >
                {row.label}
                {order.id === row.id ? (
                  <span className={classes.visuallyHidden}>
                    {order.direction === 'desc' ? 'sorted descending' : 'sorted ascending'}
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

EnhancedTableHead.defaultProps = {
  data: []
}

EnhancedTableHead.propTypes = {
  data: PropTypes.array.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.array.isRequired
}
