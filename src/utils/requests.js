import axios from 'axios'
const BASE_URL = 'http://localhost/api/'

export const get = async (URL, ...props) => await axios.get(`${BASE_URL}${URL}`, props)
export const post = async (URL, ...props) => await axios.post(`${BASE_URL}${URL}`, props)