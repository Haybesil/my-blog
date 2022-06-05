import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData';
import './Navbar.css';
import '../Components/topbar/topbar.css'
import { IconContext } from 'react-icons';
import user20 from '../Components/images/user20.jpg'
import TopBar from '../Components/topbar/TopBar'

function Navbar() {
  
    const [sidebar, setSidebar] = useState(false); 
   
    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className='navbar'>
        <Link to ='#' className='menu-bars'>
          <FaIcons.FaBars className='icons' onClick={showSidebar}/>
        </Link>
      </div>
      <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
       <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
         <Link to='#' className='menu-bars'>
          <AiIcons.AiOutlineClose />
         </Link>
        </li>
        {SidebarData.map((item, index) => {
            return ( 
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                   {item.icon}
                   <span>{item.title}</span>
                 </Link>
                </li> 
            );
         })} 
        </ul>
       </nav>
      </IconContext.Provider>

     
    </>
  )
}

export default Navbar