import axios from 'axios'

export default function getBase() {
  request = axios.create({
      baseURL: 'http://localhost:3001',
      timeout: 1000
    }
  )

  return request
}