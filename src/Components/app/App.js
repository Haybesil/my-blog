import React from 'react'
import "./App.css";
import Header from "../header/Header"
import TopBar from "../topbar/TopBar";
import Home from "../pages/home/Home"
import Single from "../pages/single/Single"
import Write from "../write/Write"
import Settings from "../pages/settings/Settings"
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from '../Navbar'





function App() {
  const user = false;
    return (
      
     <BrowserRouter>
     <TopBar/>
     <Navbar/>
     
      <Routes>
        
        <Route path="/" element = {<Home/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/write" element = {<Write/>}/>
        <Route path="/settings" element = {<Settings/>}/>
        <Route path="/post/:postId" element = {<Single/>}/>
        
      </Routes>
     </BrowserRouter>
  
  

    )
}

export default App