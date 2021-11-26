import axios from 'axios'

const Api = () => {
  return axios.create({
    baseURL: `http://localhost:8080`,
    headers: {
      'content-type': 'application/json',
    },
  })
}

export default Api
