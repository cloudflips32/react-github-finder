import { useEffect, useState } from 'react'
import UserItem from './UserItem'
/**
* A functional component that fetches and displays user data from a GitHub API.
* @returns {JSX.Element} - A JSX element representing the user results.
*/
const UserResults = () => {
  /**
  * State variable to store the fetched user data.
  * @type {Array}
  */
  const [users,setUsers] = useState([])

  /**
  * State variable to track the loading state of the component.
  * @type {boolean}
  */

  const [loading,setLoading] = useState(true)
  /**
  * Effect hook that fetches user data when the component mounts.
  */
  useEffect(() => {
    fetchUsers()
  }, [])
  /**
  * Asynchronous function that fetches user data from the GitHub API.
  */
  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {

      headers: {
        Authorization: `token ${import.meta.env.VITE_API_KEY}`
      },
    })

    const data = await response.json()

      setUsers(data)
      setLoading(false)
  }
  /**
   * Conditional rendering based on the loading state.
   * If not loading, renders a grid of user cards.
   * If loading, renders a loading message.
   * @returns {JSX.Element} - A JSX element representing the user results.
   */
  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }
}

export default UserResults