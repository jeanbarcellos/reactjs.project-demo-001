import { format } from 'date-fns'

export const dateFormat = {
  DATE: 'dd/MM/yyyy',
  TIME: 'HH:mm:ss',
  DATETIME: 'dd/MM/yyyy HH:mm',
  DATETIME_WITH_SECS: 'dd/MM/yyyy HH:mm:ss'
}

export const toStringDate = (date, format = dateFormat.DATE, utc = false) => {
  let parsedDate = date

  if (!(date instanceof Date)) {
    parsedDate = new Date(date)
  }

  return format(parsedDate, format)
}

export const toStringTime = (date, utc = false) => {
  let parsedDate = date

  if (!(date instanceof Date)) {
    parsedDate = new Date(date)
  }

  return format(parsedDate, dateFormat.TIME)
}

export const toStringDateTime = (date, utc = false) => {
  let parsedDate = date

  if (!(date instanceof Date)) {
    parsedDate = new Date(date)
  }

  return format(parsedDate, dateFormat.DATETIME_WITH_SECS)
}
