import { createContext, useState } from 'react'

export const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [token, setToken] = useState(true)

    const logOut = () => {
        setToken(!token)
      }

    const [user, setUser] = useState({
      email: 'test@test.com'
    })

    const stateGlobalUser = {
        token,
        logOut,
        user,
        setUser
    }

  return (
    <UserContext.Provider value={stateGlobalUser}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider