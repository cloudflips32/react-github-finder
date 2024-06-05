import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"
/**
* Home component that displays the requested users.
* 
* @returns {JSX.Element} - The JSX element to render the Home component.
*/
const Home = () => {
  /**
  * Renders the Home component.
  * 
  * @returns {JSX.Element} - The JSX element to render the Home component.
  */
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home