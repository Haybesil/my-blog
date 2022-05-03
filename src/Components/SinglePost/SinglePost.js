import React from 'react'
import "./singlepost.css"
import user5 from "../images/user5.jpg"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img className='singlePostImg' src={user5} alt=''/>
        <h1 className='singlePostTitle'>Loren ipsum dolor sit amet.
        <div className='singlePostEdit'>
          <i className='singlePostIcon far fa-edit'></i>
          <i className='singlePostIcon far fa-trash-alt'></i>
        </div>    
       </h1>
       <div className='singlePostInfo'>
         <span className='singlePostAuthor'>Author: <b>Silas</b></span>
         <span className='singlePostDate'>1 hour ago</span>
       </div>
       <p className='singlePostDesc'>Lorem ipsum dolor yemen amet gtersf kjgsrra 
         derys aoaiuys alkhgd grsi afgis lakgfsx rwtgis 
         kugfus atgujb gfsgjnjhs fsbkhs jbxhbs gfashgbxjbx 
         vgxjhn bxvxg gaf akihsuga ihdgya knxjb jvh
         lorem ipsum dolor yemen amet gtersf kjgsrra 
         derys aoaiuys alkhgd grsi afgis lakgfsx rwtgis 
         kugfus atgujb gfsgjnjhs fsbkhs jbxhbs gfashgbxjbx 
         vgxjhn bxvxg gaf akihsuga ihdgya knxjb jvhlorem 
         ipsum dolor yemen amet gtersf kjgsrra 
         derys aoaiuys alkhgd grsi afgis lakgfsx rwtgis 
         kugfus atgujb gfsgjnjhs fsbkhs jbxhbs gfashgbxjbx 
         vgxjhn bxvxg gaf akihsuga ihdgya knxjb jvh
         lorem ipsum dolor yemen amet gtersf kjgsrra 
         derys aoaiuys alkhgd grsi afgis lakgfsx rwtgis 
         kugfus atgujb gfsgjnjhs fsbkhs jbxhbs gfashgbxjbx 
         vgxjhn bxvxg gaf akihsuga ihdgya knxjb jvh
       </p>
      </div>
    </div>
  )
}
