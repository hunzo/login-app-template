import { Link } from 'react-router-dom'
import { useAuth } from '../../AuthProvider'
import './navbar.css'
const Navbar = () => {
  const { setAuth } = useAuth()
  return (
    <nav>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/app">Home</Link>
          </li>
          <li>
            <Link to="/app/profile">Profile</Link>
          </li>
          <li>
            <Link to="/app/about">About</Link>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={() => setAuth(false)} style={{ marginRight: '1rem' }}>
          logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
