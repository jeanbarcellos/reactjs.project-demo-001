import { useState } from 'react'
import _ from 'lodash'

const useTable = (initialPage = 0, initialRowsPerPage = 5) => {
  const [order, setOrder] = useState({ direction: 'asc', id: 'calories' })
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

  const getFilteredData = (rows, iteratee) => {
    return _.orderBy(rows, [iteratee], [order.direction]).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
