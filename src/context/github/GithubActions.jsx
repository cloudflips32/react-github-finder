

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

