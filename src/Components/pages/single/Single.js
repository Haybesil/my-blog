import React from 'react'
import Post from '../../post/Post'
import Sidebar from '../../sidebar/Sidebar'
import SinglePost from '../../SinglePost/SinglePost'
import "./single.css"

export default function Single() {
  return (
    <div className='single'>
     <SinglePost></SinglePost>
     <Sidebar></Sidebar>
  {/*<Post></Post>*/}
    </div>
  )
}

