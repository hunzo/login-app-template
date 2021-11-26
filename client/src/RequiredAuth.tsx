import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'

const RequiredAuth = ({ children }: { children: JSX.Element }) => {
  console.log('call RequiredAuth...')
  const location = useLocation()
  const { auth } = useAuth()
  if (!auth) return <Navigate to="/login" state={{ from: location }} />
  return children
}

export default RequiredAuth
