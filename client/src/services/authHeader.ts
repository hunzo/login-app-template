import { userSession } from '../AuthProvider'

const authHeader = () => {
  const storage = localStorage.getItem('userSession')
  if (!storage) return

  const t = JSON.parse(storage) as userSession

  //check data exist in storage and has t.token
  if (storage && t.token) {
    return t.token
  } else {
    return ''
  }
}

export default authHeader
