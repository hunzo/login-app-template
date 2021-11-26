import Api from './api'
import authHeader from './authHeader'

const UserAuth = (username: string, password: string) => {
  const payload = {
    username: username,
    password: password,
  }
  return Api().post(`/login`, payload)
}

const GetProfile = () => {
  return Api().get('/private', {
    headers: {
      Authorization: `Bearer ${authHeader()}`,
    },
  })
}

export { UserAuth, GetProfile }
