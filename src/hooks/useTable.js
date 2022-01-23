import { SortEnum } from 'enums'
import _ from 'lodash'
import { useState } from 'react'

const useTable = (
  initialPage = 0,
  initialRowsPerPage = 5,
  initialOrderProperty = null,
  initialOrderDirection = SortEnum.ASCENDING
) => {
  const [order, setOrder] = useState({ direction: initialOrderDirection, id: initialOrderProperty })
  const [page, setPage] = useState(initialPage)
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage)

  const handleRequestSort = (event, property) => {
    const isAsc = order.id === property && order.direction === SortEnum.ASCENDING

    setOrder({ direction: isAsc ? SortEnum.DESCENDING : SortEnum.ASCENDING, id: property })
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const getFilteredData = (rows, sortMap = null) => {
    const start = page * rowsPerPage
    const end = start + rowsPerPage

    if (sortMap) {
      return _.orderBy(rows, [getIteratee(sortMap)], [order.direction]).slice(start, end)
    }

    return rows.slice(start, end)
  }

  const getIteratee = sortMap => {
    if (typeof sortMap === 'function') {
      return o => {
        return sortMap[order.id] || o[order.id]
      }
    }

    if (typeof sortMap === 'object') {
      return sortMap[order.id] || (o => o[order.id])
    }

    return null
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
