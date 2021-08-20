import { format } from 'date-fns'

export const toStringDate = (date, utc = false) => {
  let parsedDate = date
  if (!(date instanceof Date)) {
    parsedDate = new Date(date)
  }

  return format(parsedDate, 'dd/MM/yyyy')
}

export const toStringTime = (date, utc = false) => {
  let parsedDate = date
  if (!(date instanceof Date)) {
    parsedDate = new Date(date)
  }

  return format(parsedDate, 'HH:MM:SS')
}

export const toStringDateTime = (date, utc = false) => {
  let parsedDate = date
  if (!(date instanceof Date)) {
    parsedDate = new Date(date)
  }

  return format(parsedDate, 'dd/MM/yyyy HH:MM:SS')
}
