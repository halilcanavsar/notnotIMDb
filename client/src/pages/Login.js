import { useState, useContext } from 'react'
import { login } from '../contexts/auth/apiCalls'
import { authContext } from '../contexts/auth/authContext'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {dispatch} = useContext(authContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({email, password}, dispatch);
  }


  return (
    <div className="login">
      <div className="login-top">
          <div className="login-container">
            <form>
              <h1>Sign In</h1>
              <input type="email" placeholder="email address" onChange={ (e) => setEmail(e.target.value)} />
              <input type="password" placeholder="password" onChange={ (e) => setPassword(e.target.value)}/>
              <button className="login-button" onClick={handleLogin}>Sign In</button>
              <span>If you don't have an account - <b>Sign up now</b></span>
            </form>
           </div>
      </div>
    </div>
   );
}

export default Login;