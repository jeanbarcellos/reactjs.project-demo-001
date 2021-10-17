import { format } from 'date-fns'
import { DateFormatEnum } from 'enums'

export const toStringDate = (date, format = DateFormatEnum.DATE, utc = false) => {
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

  return format(parsedDate, DateFormatEnum.TIME)
}

export const toStringDateTime = (date, utc = false) => {
  let parsedDate = date

  if (!(date instanceof Date)) {
    parsedDate = new Date(date)
  }

  return format(parsedDate, DateFormatEnum.DATETIME_WITH_SECS)
}
