import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import { useAuth } from './AuthProvider'
import About from './components/about/about'
import Login from './components/login/login'
import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import RequiredAuth from './RequiredAuth'

function App() {
  const { auth } = useAuth()
  return (
    <div className="App">
      {auth ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/app/*"
          element={
            <RequiredAuth>
              <Protect />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  )
}

const Protect = () => {
  const { setAuth } = useAuth()
  return (
    <div>
      <div>
        <Link to="profile">profile</Link> | <Link to="about">About</Link> |{' '}
        <button onClick={() => setAuth(false)}>logout</button>
      </div>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
