import { client } from 'services/http/client'

const ENDPOINT = '/categories'

export const getCategories = () => client.get(`${ENDPOINT}`)

export const getCategory = id => client.get(`${ENDPOINT}/${id}`)

export const insertCategory = category => client.post(`${ENDPOINT}`, category)

export const updateCategory = category => client.put(`${ENDPOINT}/${category.id}`, category)

export const deleteCategory = category => client.delete(`${ENDPOINT}/${category.id || category}`)
