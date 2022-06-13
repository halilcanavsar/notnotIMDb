import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from './userTypes'

const usersReducer = ( state, action ) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      }
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      }
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
      }
    default:
      return state;
    }
}
export default usersReducer;