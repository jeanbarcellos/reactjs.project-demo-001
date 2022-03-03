import { client } from 'services/http/client'

const ENDPOINT = '/roles'

export const getRoles = () => client.get(`${ENDPOINT}`)

export const getRole = id => client.get(`${ENDPOINT}/${id}`)

export const insertRole = role => client.post(`${ENDPOINT}`, role)

export const updateRole = role => client.put(`${ENDPOINT}/${role.id}`, role)

export const deleteRole = role => client.delete(`${ENDPOINT}/${role.id || role}`)
