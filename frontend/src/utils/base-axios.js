import axios from 'axios'

let request = null

export function getRequest() {
  request = axios.create({
      baseURL: 'http://localhost:3001',
      timeout: 5000
    }
  )

  return request
}