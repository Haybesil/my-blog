import React from 'react'
import "./write.css"
import user3 from "../images/user3.jpg"

export default function Write() {
  return (
    <div className='write'>
      <img className='writeImg' src={user3} alt=''/>
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'>w</i>
          </label>
          <input type= "file" id='fileInput' style={{display: "none"}}/>
          <input className='writeInput' autoFocus = {true} type= "text" placeholder='Title'/>
        </div>
        <div className='writeFormGroup'>
          <textarea className='writeInput writeText' placeholder= "Tell your Story..." type= "text" ></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}
