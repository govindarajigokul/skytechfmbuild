import React from "react";
import "../css/Footer.css";
import { Link } from 'react-router-dom';




const Footer = () => {
  return (
    <div className="bo" > 
    <footer className="footer">
      <div className="footer-section">
        <h3>USEFUL LINKS</h3>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Our Expertise</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/careers">Careers</Link></li>
       
        </ul>
      </div>
      <div className="footer-section">
        <h3>SERVICES</h3>
        <ul>
       <li><Link to="/fitout-service">Fitout Service</Link></li>
       <li> <Link to="/mep-service">MEP Services</Link></li>
       <li><Link to="/hard-service">Hard Services</Link></li>
       <li><Link to="/soft-service">Soft Services</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>CONTACT</h3>
        <p>
        Office 08-10    <br /> Al Khubaira Building   <br />
          
        Zone - Al Bateen, W10
          <br />
          Ras Al Qit’ah St, Al Bateen, 28 <br /> PO BoX - 101625  <br/>    Abudhabi      <br />     026766247          <br /> info@skytechfm.com

          {/* <p><a href="mailto:info@skytechfm.com">info@skytechfm.com</a></p> */}
        </p>
        
      </div>
      <div className="footer-section social-media">
        <h3>SOCIAL MEDIA</h3>
        <div className="social-icons">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>
     
    </footer>

    <div className="copy-1">
    
        <a href="https://www.cuckooimages.com" >  {'\u00A9'} Design & Developed By CUCKOOIMAGES</a>  
        
      </div>
      
      </div>
  );
};

export default Footer;
