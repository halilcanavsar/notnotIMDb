import { loginFailure, loginSuccess, loginStart } from './authActions';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const response = await fetch('http://localhost:3003/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(loginSuccess(data));
    }
    else {
      dispatch(loginFailure(data));
    }
  }
  catch (error) {
    dispatch(loginFailure(error));
  }
}


