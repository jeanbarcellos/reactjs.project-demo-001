// Representa o stato de um Dialog fechado
export const createStateClosedDialog = () => {
  return {
    open: false,
    data: null
  }
}

// Representa o stato de um Dialog aberto
export const createStateOpenedDialog = (data = null) => {
  return {
    open: true,
    data
  }
}
