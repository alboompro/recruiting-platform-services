import axios from 'axios'

let request = null

export function getRequest() {
  request = axios.create({
      baseURL: 'http://localhost:3001',
      timeout: 1000
    }
  )

  return request
}