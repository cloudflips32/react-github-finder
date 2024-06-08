

const VITE_API_URL = import.meta.env.VITE_API_URL
const VITE_API_KEY = import.meta.env.VITE_API_KEY

/**
  * Asynchronous function that fetches user data from the GitHub API, test purposes
  */
export const searchUsers = async (text) => {

  const params = new URLSearchParams({
    q: text
  })

  const response = await fetch(`${VITE_API_URL}/search/users?${params}`, {

    headers: {
      Authorization: `token ${VITE_API_KEY}`
    },
  })
  const {items} = await response.json()

  return items
}

export const getUser = async (login) => {

  const response = await fetch(`${VITE_API_URL}/users/${login}`, {

    headers: {
      Authorization: `token ${VITE_API_KEY}`
    },
  })

  if(response.status === 404) {
    window.location = '/notfound'
  } else {
    const data = await response.json()
    return data
  }
}

export const getUserRepos = async (login) => {

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

  return data 
}

