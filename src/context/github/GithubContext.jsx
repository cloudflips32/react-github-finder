import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const VITE_API_URL = import.meta.env.VITE_API_URL
const VITE_API_KEY = import.meta.env.VITE_API_KEY

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    loading: false,
  }

  const [state,dispatch] = useReducer(GithubReducer, initialState)
  /**
  * Asynchronous function that fetches user data from the GitHub API, test purposes
  */
  const fetchUsers = async () => {
    setLoading()

    const response = await fetch(`${VITE_API_URL}/users`, {

      headers: {
        Authorization: `token ${VITE_API_KEY}`
      },
    })
    const data = await response.json()

    dispatch({
      type: 'GET_USERS',
      payload: data,
    }) 
  }

  const setLoading = () => dispatch({

  })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext