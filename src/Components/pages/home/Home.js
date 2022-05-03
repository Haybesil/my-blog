import React from 'react'
import './home.css'
import Header from "../../header/Header"
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'

function Home() {
  return (
      <>
    <Header></Header>
    <div className='home'>
       <Posts></Posts>
       <Sidebar></Sidebar> 
     
    </div>
    </>
  )
}


export default Home