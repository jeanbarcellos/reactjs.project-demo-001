import { useState } from 'react'
import _ from 'lodash'

const useTable = (
  initialPage = 0,
  initialRowsPerPage = 5,
  initialOrderProperty = null,
  initialOrderDirection = 'asc'
) => {
  const [order, setOrder] = useState({ direction: initialOrderDirection, id: initialOrderProperty })
  const [page, setPage] = useState(initialPage)
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage)

  const handleRequestSort = (event, property) => {
    const isAsc = order.id === property && order.direction === 'asc'

    setOrder({ direction: isAsc ? 'desc' : 'asc', id: property })
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const getFilteredData = (rows, iteratee = null) => {
    const start = page * rowsPerPage
    const end = start + rowsPerPage

    if (iteratee) {
      return _.orderBy(rows, [iteratee], [order.direction]).slice(start, end)
    }

    return rows.slice(start, end)
  }

  return {
    order,
    page,
    rowsPerPage,
    handleRequestSort,
    handleChangePage,
    handleChangeRowsPerPage,
    getFilteredData
  }
}

export default useTable
