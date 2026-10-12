import React, { useState } from 'react';
import "../css/ContactUs.css";
import axios from 'axios';

const ContactUs = () => {
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      contact: '',
      message:'',
    });
    const [fileName, setFileName] = useState('');
  
    // Handle input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
   
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formDetails = new FormData();
      Object.keys(formData).forEach((key) => formDetails.append(key, formData[key]));
  
      try {
        const response = await axios.post(
          'https://domain.selfmade.one/skytechmail/userdetails.php',
          formDetails,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
        alert(response.data.status === 'success' ? response.data.message : 'Error: ' + response.data.message);
      } catch (error) {
        console.error('Submission error:', error);
        alert('Error: ' + (error.response ? error.response.data.message : error.message));
      }
    };
  
  return (
    <div className="whole">
    <div className="contact-us-container">
      <h2>Get in Touch with Us</h2>
      <p>  Whether you’re looking for a one-time service or ongoing facility management, Skytech International is here to ensure your spaces remain operational, clean, and secure. Reach out to us for customized solutions and let us take care of your facility management needs.</p>
      <div className="contact-info-form">
        
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Our Office Address</h4>
              <p>
              Office 08-10,
              Al Khubaira Building 
                <br />
                Zone - Al Bateen, W10
                Ras Al Qit’ah St, <br /> Al Bateen, 28 <br />
                PO BoX - 101625

              </p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>General Enquiries</h4>
              <p> info@skytechfm.com              </p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <h4>Call Us</h4>
              <p>026766247</p>
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-clock"></i>
            <div>
              <h4>Our Timing</h4>
              <p>Mon - Sun : 09:00 AM - 09:00 PM</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} >
          <input type="text" placeholder="Your Name"  value={formData.name}
            onChange={handleChange}
            required name="name"/>

          <input type="email" placeholder="Your Email" value={formData.email}
            onChange={handleChange}
            required name="email" />

          <input type="text" placeholder="Your Contact No." value={formData.contact}
            onChange={handleChange}
            required name="contact" />

          <textarea placeholder="Your Message" required value={formData.message}
            onChange={handleChange} name="message" > </textarea>

          <button type="submit">SUBMIT</button>
        </form>
      </div>

      <div className="map-container">
       
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14440.08995437274!2d55.26076800394377!3d25.20246409331782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42659897a4f5%3A0xd8d16fd51a2b9040!2sThe%20Green%20Planet!5e0!3m2!1sen!2sin!4v1728555380871!5m2!1sen!2sin"
          style={{ width: "100%", height: "300px", border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
       
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
