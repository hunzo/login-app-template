import { useAuth } from '../../AuthProvider'
import { GetProfile } from '../../services/fetchApi'
import './profile.css'

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
      <h1>Profile Page</h1>
      <p>Hello {user.username} !!</p>
      <p className="wrap">Token: {user.token}</p>
      <button onClick={getProfile}>check session</button>
    </div>
  )
}

export default Profile
