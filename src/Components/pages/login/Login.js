import React from 'react'
import "./login.css"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className='logIn'>
      <span className='logInTitle'>Login</span> 
      <form className='logInForm'>
        <label>Email</label>
        <input className='logInInput' type ="text" placeholder='Enter your email...'/>
        <label>Password</label>
        <input className='logInInput' type ="password" placeholder='Enter your password...'/>
        <button className='logInButton'>Log In</button>  
      </form>
      <button className='logInRegisterButton'>
        <Link className='link' to="/register">REGISTER</Link>
      </button>
    </div>
  )
}
