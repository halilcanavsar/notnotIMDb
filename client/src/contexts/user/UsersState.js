import { useReducer } from 'react'
import usersReducer from './usersReducer';
import UsersContext from './usersContext'
import { LOGIN_USER, REGISTER_USER, AUTH_USER, LOGOUT_USER } from './userTypes'



const UsersState = (props) => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
};

  const [ state, dispatch ] = useReducer(usersReducer, initialState);

  const loginUser = async (user) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify(user);
    const response = await fetch('/api/auth', {
      method: 'POST',
      body,
      config
    });
    const data = await response.json();
    dispatch({ type: LOGIN_USER, payload: data });
  }

  const registerUser = async (user) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify(user);
    const response = await fetch('/api/users', {
      method: 'POST',
      body,
      config
    });
    const data = await response.json();
    dispatch({ type: REGISTER_USER, payload: data });
  }

  const authUser = async () => {
    const response = await fetch('/api/auth');
    const data = await response.json();
    dispatch({ type: AUTH_USER, payload: data });
  }

  const logoutUser = async () => {
    const response = await fetch('/api/auth', {
      method: 'DELETE'
    });
    const data = await response.json();
    dispatch({ type: LOGOUT_USER, payload: data });
  }

  return (
    <UsersContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        loginUser,
        registerUser,
        authUser,
        logoutUser
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
}

