import { client } from 'services/http/client'

const ENDPOINT = '/users'

export const getUsers = () => client.get(`${ENDPOINT}`)

export const getUser = id => client.get(`${ENDPOINT}/${id}`)

export const insertUser = user => client.post(`${ENDPOINT}`, user)

export const updateUser = user => client.put(`${ENDPOINT}/${user.id}`, user)

export const activateUser = user => client.put(`${ENDPOINT}/${user.id}/activate`, user)

export const inactivateUser = user => client.put(`${ENDPOINT}/${user.id}/inactivate`, user)
