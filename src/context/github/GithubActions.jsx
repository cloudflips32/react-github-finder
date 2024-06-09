import axios from 'axios'

const VITE_API_URL = import.meta.env.VITE_API_URL
const VITE_API_KEY = import.meta.env.VITE_API_KEY

const github = axios.create({
  baseURL: VITE_API_URL,
  headers: { Authorization: `token ${VITE_API_KEY}` }
})

/**
  * Asynchronous function that fetches user data from the GitHub API, test purposes
  */
export const searchUsers = async (text) => {

  const params = new URLSearchParams({
    q: text
  })
  const response = await github.get(`/search/users?${params}`)
  return response.data.items
}

export const getUserAndRepos = async (login) => {
const [user,repos] = await Promise.all([
  github.get(`/users/${login}`),
  github.get(`/users/${login}/repos`)
])

return { user: user.data, repos: repos.data}

}
