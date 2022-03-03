import { client } from 'services/http/client'

const ENDPOINT = '/utils'

export const generateGuid = () => client.get(`${ENDPOINT}/guid-generate`)

export const encodePassword = password => client.post(`${ENDPOINT}/password-encode`, { password })
