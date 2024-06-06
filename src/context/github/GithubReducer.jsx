/**
 * Reducer function for handling Github related actions.
 * 
 * @param {Object} state - The current state of the application.
 * @param {Object} action - The action object containing the type and payload.
 * @returns {Object} - The new state after applying the action.
 */
const GithubReducer = (state,action) => {
  switch (action.type) {
    case 'GET_USERS':
      /**
       * Action to get users from Github API.
       * 
       * @param {Array} action.payload - The array of users fetched from the API.
       * @returns {Object} - The new state with the updated users and loading status.
       */
      return {
       ...state,
        users: action.payload,
        loading: false,
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    case 'GET_REPOS':
      return {
       ...state,
        repos: action.payload,
        loading: false,
      }
    case 'SET_LOADING:':
      return {
        ...state,
         loading: true,
      };
    case 'CLEAR_USERS':
      return {
       ...state,
        users: [],
        loading: false,
      }
    default:
      return state
  }
}

export default GithubReducer