import { useReducer } from 'react'
import usersReducer from './usersReducer';
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from './userTypes'



const UsersState = (props) => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
};

  const [ state, dispatch ] = useReducer(usersReducer, initialState);

  const loginUser = async (user) => {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await res.json();
  }







}