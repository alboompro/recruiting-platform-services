import axios from 'axios'

const baseRequest = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000
});

class Api {

  signup(email) {
    baseRequest.get(`/api/v1/sigup?email=${email}`)
      .then(res => {
        return res.status
      }
    )
  }

  getProducts(){
    baseRequest.get('/api/v1/product')
      .then(res => {
        return res.data
      }
    )
  }

  getIngredients(productId){
    baseRequest.get(`/api/v1/product/${productId}/complements`)
      .then(res => {
        return res.data
      }
    )
  }

  submit(){
    baseRequest.post('/api/v1/submit', {object})
      .then(res => {
        return res.status
      }
    )
  }

}