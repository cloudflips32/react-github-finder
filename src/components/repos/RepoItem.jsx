import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import PropTypes from 'prop-types'

const RepoItem = ({repo}) => {

  const {
    name, 
    description, 
    html_url, 
    forks, 
    open_issues, 
    watchers_count,  
    stargazers_count,
  } = repo;

  return (
    <div className='mb-2 rounded-mb card bg-gray-800 hover:bg-gray-900'>
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold text-white">
          <a href={html_url}>
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="mr-2 badge badge-sm">
            <FaEye className='mr-2' style={{color: 'blue'}} alt='watchers' /> {watchers_count}
          </div>
          <div className="mr-2 badge badge-sm">
            <FaStar className='mr-2' style={{color: 'green'}} alt='starred' /> {stargazers_count} 
          </div>
          <div className="mr-2 badge badge-sm">
            <FaInfo className='mr-2' style={{color: 'red'}} alt='open issues' /> {open_issues}
          </div>
          <div className="mr-2 badge badge-sm">
            <FaUtensils className='mr-2' style={{color: 'yellow'}} alt='forks' /> {forks}
          </div>
        </div>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
