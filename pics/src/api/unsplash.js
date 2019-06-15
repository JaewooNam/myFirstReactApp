import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID e86b4b6249663f2210d6dc843c59dc0f4629ddb6cb4d4cfe2ae45725a4610f7d'
  }
})
