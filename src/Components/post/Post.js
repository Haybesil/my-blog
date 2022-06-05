import React from 'react'
import "./post.css"
import user22 from "../images/user22.jpg"

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src={user22} alt=''/>
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor amet</span>
        <hr/>
        <span className='postDate'>1 hour ago</span>
      </div>

      <p className='postDesc'>lorem husgss gafhaxjhx agfhaj hjahxgu 
        hvxghsbjzzz,uysgysausahjs uyfd jjhsyhg tryfgc 
        jhutrd jogyse eweyuhi kkuydra liuyfsed jhf
        rsrg tfygbbj gdrtfg drdtfyvhcugyf rstfyvsryf drdtyv 
        rfdtfcfxrd ctfyhvh
        lorem husgss gafhaxjhx agfhaj hjahxgu 
        hvxghsbjzzz,uysgysausahjs uyfd jjhsyhg tryfgc 
        jhutrd jogyse eweyuhi kkuydra liuyfsed jhf
        rsrg tfygbbj gdrtfg drdtfyvhcugyf rstfyvsryf drdtyv 
        rfdtfcfxrd ctfyhvh
        lorem husgss gafhaxjhx agfhaj hjahxgu 
        hvxghsbjzzz,uysgysausahjs uyfd jjhsyhg tryfgc 
        jhutrd jogyse eweyuhi kkuydra liuyfsed jhf
        rsrg tfygbbj gdrtfg drdtfyvhcugyf rstfyvsryf drdtyv 
        rfdtfcfxrd ctfyhvh
     </p>
    </div>
  )
}
