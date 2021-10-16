import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api-mentoree.herokuapp.com',
  headers: { 'Content-Type': 'application/json' }
})

export default instance