import { Route, Routes } from 'react-router-dom'
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
        <Route path="/login" element={<Login />} />
        <Route
          path="/app/*"
          element={
            <RequiredAuth>
              <Protect />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  )
}

const Protect = () => {
  return (
    <div className="Content">
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
