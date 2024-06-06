import { createContext, useReducer } from 'react'
import GithubReducer from './GithubReducer'

const GithubContext = createContext()

const VITE_API_URL = import.meta.env.VITE_API_URL
const VITE_API_KEY = import.meta.env.VITE_API_KEY

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state,dispatch] = useReducer(GithubReducer, initialState)
  /**
  * Asynchronous function that fetches user data from the GitHub API, test purposes
  */
  const searchUsers = async (text) => {
    setLoading()

    const params = new URLSearchParams({
      q: text
    })

    const response = await fetch(`${VITE_API_URL}/search/users?${params}`, {

      headers: {
        Authorization: `token ${VITE_API_KEY}`
      },
    })
    const {items} = await response.json()

    dispatch({
      type: 'GET_USERS',
      payload: items,
    }) 
  }

  const getUser = async (login) => {
    setLoading()

    const response = await fetch(`${VITE_API_URL}/users/${login}`, {

      headers: {
        Authorization: `token ${VITE_API_KEY}`
      },
    })

    if(response.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await response.json()
  
      dispatch({
        type: 'GET_USER',
        payload: data,
      }) 
    }
  }

  const getUserRepos = async (login) => {
    setLoading()

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    })

    const response = await fetch(`${VITE_API_URL}/users/${login}/repos?${params}`, {

      headers: {
        Authorization: `token ${VITE_API_KEY}`
      },
    })
    const data = await response.json()

    dispatch({
      type: 'GET_REPOS',
      payload: data,
    }) 
  }

  const clearUsers = () => dispatch({
    type: 'CLEAR_USERS'
  })

  const setLoading = () => dispatch({
    type: 'SET_LOADING'})

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext