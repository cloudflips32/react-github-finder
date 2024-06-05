import { createContext, useState } from 'react'

const GithubContext = createContext()

const VITE_API_URL = import.meta.env.VITE_API_URL
const VITE_API_KEY = import.meta.env.VITE_API_KEY

export const GithubProvider = ({children}) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  /**
  * Asynchronous function that fetches user data from the GitHub API.
  */
  const fetchUsers = async () => {
    const response = await fetch(`${VITE_API_URL}/users`, {

      headers: {
        Authorization: `token ${VITE_API_KEY}`
      },
    })
    const data = await response.json()

    setUsers(data)
    setLoading(false) 
  }
  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext