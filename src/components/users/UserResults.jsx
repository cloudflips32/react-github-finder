import { useEffect } from "react"

const UserResults = () => {
  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {

    const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_API_KEY}`
      },
    })

    const data = async () => {
      const response = await response.json()

      console.log(data);
    }
  }

  return (
    <div>Hello, World!</div>
  )
}

export default UserResults