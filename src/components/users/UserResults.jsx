import { useContext } from 'react'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

const UserResults = () => {
  const { users, loading } = useContext(GithubContext)
  
  if (!loading) {
    return (
      <div className='grid grid-cols-2 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
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