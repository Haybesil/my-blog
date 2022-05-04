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





function App() {
  const user = true;
    return (
      
     <BrowserRouter>
     <TopBar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/register" element = {user ? <Home/> : <Register/>}/>
        <Route path="/login" element = {user ? <Home/> : <Login/>}/>
        <Route path="/write" element = {user ? <Write/> : <Register/>}/>
        <Route path="/settings" element = {user ?<Settings/> : <Register/>}/>
        <Route path="/post/:postId" element = {<Single/>}/>
        
      </Routes>
     </BrowserRouter>
  
  

    )
}

export default App