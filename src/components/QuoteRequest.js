import React, { useState } from 'react';
import '../css/QuoteRequest.css'; // Import the CSS file
import successImage from '.././assets/thanks.png'; // Import the success image
import axios from 'axios'; 


const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    contactNumber: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formDetails = new FormData();
      Object.keys(formData).forEach((key) => formDetails.append(key, formData[key]));
  
      try {
        const response = await axios.post(
          'https://domain.selfmade.one/skytechmail/request.php',
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
    <div className="request-quote-container">
      <div className="form-container">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <h2>Request a Quote</h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              rows="4"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />

            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter what service you want........."
              rows="4"
            />

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="success-message">
            <img src={successImage} alt="Success" className="success-image" />
            <h3>Thank you for your request!</h3>
            <p>Our team will contact you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestQuote;
