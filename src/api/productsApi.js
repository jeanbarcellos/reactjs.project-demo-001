import { client } from 'services/http/client'

const ENDPOINT = '/products'

export const getProducts = () => client.get(`${ENDPOINT}`)

export const getProduct = id => client.get(`${ENDPOINT}/${id}`)

export const insertProduct = product => client.post(`${ENDPOINT}`, product)

export const updateProduct = product => client.put(`${ENDPOINT}/${product.id}`, product)
