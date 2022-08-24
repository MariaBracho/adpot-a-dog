const axios = require('axios')
const API_KEY = '25724750-fb32-471d-9aed-4ccbf3d6eef1'
const URL_API = 'https://api.thedogapi.com/v1'

export const instance = axios.create({
  baseURL: URL_API
})

instance.defaults.headers.common['X-API-KEY'] = API_KEY
