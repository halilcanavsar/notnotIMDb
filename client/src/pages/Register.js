import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';



const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }

  const handleFinish = () => {
    setPassword(passwordRef.current.value)
  }

  return (
    <div className="register">
      <div className="register-top">
        <button className="registerButton"></button>


          {!email ? (
            <div className="register-email-input">
            <input type="email" placeholder="email address"  ref={emailRef} />
            <button className="register-button" onClick={handleStart}>Next</button>
          </div>
          ) : (
            <form className="register-email-input">
              <input type="password" placeholder="password" ref={passwordRef} />
              <button className="register-button" onClick={handleFinish}>Start</button>
            </form>
          )}


      </div>
    </div>
   );
}

export default Register;