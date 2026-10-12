import React, { useState } from "react";
import "../css/Navigation.css";
import logo from "../assets/logo/1.png";
import { Link } from "react-router-dom";





function Navigation() {
  const handleclose=()=>{
    setIsMobile(!isMobile);
  }
  const [isMobile, setIsMobile] = useState(false);
document.body.classList.add("demo");
  return (
    <>
    <nav className="navbar">
      <div className="nav-section">
        <ul className="nav-links">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/services'}>Our Services</Link></li>
        
        </ul>
      </div>

      <div className="logo">
      <Link to={'/'}> <img src={logo} alt="Logo" /></Link>   
         </div>

      <div className="nav-section">
        <ul className="nav-links">
        <li><Link to={'/about'}>About Us</Link></li>
        
          <li><Link to={'/contact'}>Contact Us</Link></li>
        </ul>
      </div>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i>  : <i className="fas fa-bars"></i>}
      </button>

      {/* Mobile Navigation */}
      {isMobile && (
<>
      <div className="overlay" onClick={handleclose}></div>
        <div className="mobile-nav" >
       
          <ul className="mobile-nav-links">
          <li><Link to={'/'} onClick={() => setIsMobile(false)} >   Home</Link></li>
            <li><Link to={'/services'} onClick={() => setIsMobile(false)} >    Our Services</Link></li>
            <li><Link to={'/about'}  onClick={() => setIsMobile(false)}>  About Us</Link></li>
      
            <li><Link to={'/contact'} onClick={() => setIsMobile(false)} >    Contact Us</Link></li>
            <li><Link to={'/careers'} onClick={() => setIsMobile(false)}>   Careers</Link></li>
          </ul>
        </div>

        </>
)}
    </nav>
    </>
  );
}

export default Navigation;