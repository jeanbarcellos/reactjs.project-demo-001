const locales = {
  PT_BR: 'pt-BR'
}

export const toStringDecimal = (input, toFixed = 2) => {
  const options = {
    style: 'decimal',
    currency: 'BRL',
    minimumFractionDigits: toFixed
  }

  return input.toLocaleString(locales.PT_BR, options)
}

export const toStringCurrency = (input, toFixed = 2) => {
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: toFixed
  }

  return input.toLocaleString(locales.PT_BR, options)
}

export const toStringPercent = (input, toFixed = 2) => {
  const options = {
    style: 'percent',
    currency: 'BRL',
    minimumFractionDigits: toFixed
  }

  const value = input / 100

  return value.toLocaleString(locales.PT_BR, options)
}
