import React from 'react'
import "./sidebar.css"
import user17 from "../images/user17.jpg"

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='sideBarItem'>
    <span className='sideBarTitle'>ABOUT ME </span>
    <img className='sideBarImg' src={user17} alt=''/>
    <p>Lorem ipsum dolor amet greys grate</p>
  </div>

  <div className='sideBarItem'>
  <span className='sideBarTitle'>CATEGORIES</span>
  <ul className='sideBarList'>
    <li className='sideBarListItem'>Life</li>
    <li className='sideBarListItem'>Music</li>
    <li className='sideBarListItem'>Style</li>
    <li className='sideBarListItem'>Sport</li>
    <li className='sideBarListItem'>Cinema</li>
    <li className='sideBarListItem'>Tech</li>
  </ul>
</div>

  <div className='sideBarItem'>
    <span className='sideBarTitle'>FOLLOW US</span>
    <div className='sideBarSocial'>
        <i className ='sideBarIcon fab fa-facebook-square'></i>
        <i className ='sideBarIcon fab fa-twitter-square'></i>
        <i className ='sideBarIcon fab fa-pinterest-square'></i>
        <i className ='sideBarIcon fab fa-instagram-square'></i>
    </div>
  </div>

</div>
  )
}


export default  Sidebar