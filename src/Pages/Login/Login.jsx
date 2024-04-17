import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { login } from '../../redux/apiCalls';
import './login.css'
function Login() {
  const [username,setUsername]= useState('');
  const [password,setPassword]= useState('');
  const dispatch = useDispatch();
  const handleLogin = (e) =>{
    e.preventDefault();
    login(dispatch,{username,password});
  }
  return (
    <div className='login'>
      <div className="login-panel">
        <div className="admin-login">
            <h3>Admin</h3>
        </div>
        <div className="admin-image">
            <div className="image">
                <img src="https://cdn-icons-png.flaticon.com/512/11135/11135261.png" alt="admin" />
            </div>
        </div>
        <div className="admin-input">
            <input value={username} placeholder='User Name' onChange={(e)=>setUsername(e.target.value)} type="text" />
        </div>
        <div className="admin-input">
            <input value={password} placeholder='Password' type="text" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div className="login-btn">
            <button onClick={handleLogin}>LOGIN</button>
        </div>
      </div>
    </div>
  )
}

export default Login
