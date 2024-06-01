import { useEffect, useState } from 'react'

const UserResults = () => {
  const [users,setUsers] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    fetchUsers()
  }, [])

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
  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <div className='m2 card card-compact border-4 border-indigo-600 bg-base-100 shadow-xl items-left'>
            <p className='text-center text-xl'>
              {user.login}
            </p>
            <div className="avatar">
              <div className="w-24 rounded-xl ml-1 mb-6">
                <img src={user.avatar_url} />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    return <h3>Loading...</h3>
  }
}

export default UserResults