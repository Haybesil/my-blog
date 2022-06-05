import React from 'react'
import "./topbar.css"
import user20 from '../images/user20.jpg'
import { Link } from "react-router-dom"


function TopBar() {

   const user = true;
  return (
    <div className='top'>
      <div className='topLeft'>
        <i href ="https://www.facebook.com" className ='topIcon fab fa-facebook-square'></i>
        <i className ='topIcon fab fa-twitter-square'></i>
        <i className ='topIcon fab fa-pinterest-square'></i>
        <i className ='topIcon fab fa-instagram-square'></i>
      </div> 

      <div className='topCenter'>
            <ul className='topList'>
              <li className='topListItem'>
                 <Link className='link' to="/">HOME</Link>
              </li>
             
              <li className='topListItem'>
              <Link className='link' to="/">ABOUT</Link>
              </li>
             
              <li className='topListItem'>
              <Link className='link' to="/">CONTACT</Link>
              </li>
             
              <li className='topListItem'>
              <Link className='link' to="/write">WRITE</Link>
              </li>
             
              <li className='topListItem'>{user && <Link className='link' to="/register">LOGOUT</Link>}</li>
           
          </ul>
         </div>  
         
         <div className='topRight'>
         {
           user ? (
            <Link to="/settings"><img className='topImg' src={user20} alt=''/></Link>
           ) : (
             <ul className='topList'>
               <li className='topListItem'>
                 <Link className='link' to="/login">LOGIN</Link>
               </li>
               <li className='topListItem'>
                 <Link className='link' to="/register">REGISTER</Link>
               </li>
             </ul>
           )
         }
         
             
             <i className = 'topSearchIcon fas fa-search'></i>
        </div> 

    </div>
  )
}


export default  TopBar