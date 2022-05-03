import "./header.css"
import user3 from "../images/user3.jpg"




import React from 'react'

function Header() {
  return (
    <div className="header">
      <div className= 'headerTitles'>
       <span className= 'headerTitleSm'>React & Node</span>        
       <span className= 'headerTitleLg'>Blog</span>        
      </div>
      <img className='headerImg' src= {user3} alt=''/>
    </div>
  )
}


export default Header
