import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { auth } from './firebase';
import './login.css'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
      navigate('/')
    }).catch((error)=>alert.message)

  }

  const Register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //creates a new user with email and password
        
        if (auth) {
          navigate('/')
        }
      }).catch(error=>alert(error.message))
     
    
  }

  return (
      <div className='login'>
          <Link to="/">
              <img
                  className='login-logo' src='https://wallpapercave.com/wp/wp7771146.png' alt='' />
            </Link>
          <div className='login-container'>
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
          <h5>Password</h5>

          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button type='submit' className='loginSignn-button' onClick={SignIn}>Sign In</button>
        </form>
        <p>By signing in you agree to the Amazon condition of use and sale.Please see our pricvcy policy before sign in.</p>
        <button className='loginRegister-button' onClick={Register}>Create your Amazon account</button>
          </div>
    </div>
  )
}

export default Login