import { useAuth } from '../../AuthProvider'
import { GetProfile } from '../../services/fetchApi'

const Profile = () => {
  const { setAuth, user } = useAuth()
  const getProfile = () => {
    GetProfile()
      .then((rs) => {
        console.log(rs.data)
      })
      .catch(() => {
        setAuth(false)
      })
  }
  return (
    <div>
      <h1>Profile {user.username}</h1>
      <button onClick={getProfile}>check session</button>
    </div>
  )
}

export default Profile
