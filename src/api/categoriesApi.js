import { client } from 'services/http/client'

export const getCategories = () => client.get(`/categories`)

export const getCategory = id => client.get(`/categories/${id}`)

export const insertCategory = category => client.post(`/categories`, category)

export const updateCategory = category => client.put(`/categories/${category.id}`, category)

export const deleteCategory = category => client.delete(`/categories/${category.id || category}`)
