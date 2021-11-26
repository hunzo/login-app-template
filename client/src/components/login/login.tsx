import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../AuthProvider'
import { UserAuth } from '../../services/fetchApi'
import './login.css'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setAuth, setUser } = useAuth()
  const navigate = useNavigate()

  const hSubmit = () => {
    UserAuth(username, password)
      .then((rs) => {
        // window.localStorage.setItem('token', JSON.stringify(rs.data.token))
        setAuth(true)
        setUser({
          username: username,
          token: rs.data.token,
        })
        navigate('/app/profile', { replace: true })
      })
      .catch((e) => {
        alert(JSON.stringify(e))
      })
  }

  return (
    <div className="login-box">
      <h1>Login Page</h1>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault()
          hSubmit()
        }}
      >
        <div className="login-input">
          <input
            type="text"
            placeholder="username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value)
            }}
          />
        </div>
        <div className="login-input">
          <input
            type="password"
            placeholder="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value)
            }}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login
