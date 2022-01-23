import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import MuiTablePagination from '@mui/material/TablePagination'
import React from 'react'

const TablePaginationActions = props => {
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = event => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = event => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = event => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='Primeira página'
        title='Primeira página'
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='Página anterior'
        title='Página anterior'
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='Página seguinte'
        title='Página seguinte'
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='Última página'
        title='Última página'
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  )
}

const TablePagination = props => {
  const { count, rowsPerPage, page, onChangePage, onChangeRowsPerPage } = props

  const getTypePtBr = type => {
    if (type === 'first') return 'primeira'
    if (type === 'last') return 'última'
    if (type === 'next') return 'próxima'
    return 'anterior'
  }

  return (
    <MuiTablePagination
      rowsPerPageOptions={[5, 10, 25]}
      className='overflow-visible'
      component='div'
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onChangePage}
      onRowsPerPageChange={onChangeRowsPerPage}
      labelRowsPerPage='Registros por página'
      labelDisplayedRows={({ from, to, count }) => `Exibindo ${from}-${to} de ${count} registro${count > 1 && 's'}`}
      getItemAriaLabel={type => `Ir para ${getTypePtBr(type)} página`}
      ActionsComponent={TablePaginationActions}
    />
  )
}

TablePagination.defaultProps = {
  count: 0,
  rowsPerPage: 1,
  page: 1,
  onChangePage: () => {},
  onChangeRowsPerPage: () => {}
}

export default TablePagination
