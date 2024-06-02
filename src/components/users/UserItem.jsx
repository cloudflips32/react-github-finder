import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const UserItem = ({ user: {login, html_url, avatar_url} }) => {
  return (
    <div className='m2 card compact border-4 border-indigo-600 bg-base-100 shadow-xl items-left'>
      <div className="flex-row items-center space-x-4 card-body">
        <div className='avatar'>
          <div className='rounded-full w-12 h-12'>
            <img src={avatar_url} alt={login} />
          </div>
        </div>
        <div>
          <h4 className='card-title'>{login}</h4>
          <Link to={html_url} target='_blank' rel='noreferrer' className='text-base-content text-opacity-40'>Visit Profile</Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem