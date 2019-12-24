import axios from 'axios'
import CONSTANTS from '../constants'

const client = axios.create({
  baseURL: CONSTANTS.API.BASE,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 30000
})

client.interceptors.request.use(
  async config => {
    config.headers.Authorization = CONSTANTS.API_TOKEN
    return config
  },
  err => Promise.reject(err)
)

export default client