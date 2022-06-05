import "./header.css"
import user11 from "../images/user11.jpg"
import React from 'react'

function Header() {
  return (
    <div className="header">
      <div className= 'headerTitles'>
       <span className= 'headerTitleSm'>React & Node</span>        
       <span className= 'headerTitleLg'>Blog</span>        
      </div>
      <img className='headerImg' src= {user11} alt=''/>
    </div>
  )
}


export default Header
