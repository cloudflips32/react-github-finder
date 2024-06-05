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
    case 'SET_LOADING:':
      return;
    default:
      return state
  }
}

export default GithubReducer