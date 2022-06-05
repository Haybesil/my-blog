import React from 'react'
import "./settings.css"
import SideBar from '../../sidebar/Sidebar'
import user20 from "../../images/user20.jpg"

export default function Settings() {
  return (
    <div className='settings'>
    <div className='settingsWrapper'>
    <div className='settingsTitle'>
      <span className='settingsUpdateTitle'> Update Your Account</span>
      <span className='settingsDeleteTitle'> Delete Your Account</span>
    </div>
    <form className='settingsForm'>
      <label>Profile Picture</label>
      <div className='settingsPP'>
        <img className='settingsImg' src={user20} alt=''/>
        <label htmlFor='fileInput'>
          <i className='settingsPPIcon far fa-user-circle'></i>
        </label>
        <input type= "file" id ="fileInput" style={{display: 'none'}}></input>
      </div>
      <label>Username</label>
      <input type="text" placeholder='Silas'></input>
      <label>Email</label>
      <input type="email" placeholder='Silas@gmail.com'></input>
      <label>Password</label>
      <input type="password" ></input>
      <button className='settingsSubmit'>Update</button>
    </form>
   </div>
     <SideBar></SideBar>
    </div>
  )
}
