import React, { createContext, useContext } from 'react'
import useLocalStorage from './useLocalStorage'

export interface userSession {
  username: string
  token: string
}

interface AuthContextType {
  auth: boolean
  setAuth: React.Dispatch<React.SetStateAction<boolean>>
  user: userSession
  setUser: React.Dispatch<React.SetStateAction<userSession>>
}

// const authContext = createContext<AuthContextType>(null!)
const authContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const [auth, setAuth] = useState(false)
  const [auth, setAuth] = useLocalStorage('auth', false)
  // const [user, setUser] = useState<userSession>(null!)
  const [user, setUser] = useLocalStorage<userSession>(
    'userSession',
    {} as userSession
  )

  const value = { auth, setAuth, user, setUser }
  return <authContext.Provider value={value}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}
