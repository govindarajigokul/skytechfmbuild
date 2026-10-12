import React from 'react';
import '../css/QuoteSection.css'; // Import the CSS for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Requestquote = () => {
  const navigate = useNavigate();

  return (
    <div className="quote-section">
      <div className="sub">
        <h4>Looking for comprehensive facility management solutions?</h4>
      </div>
      <div className="para">
        <p>
          Get in touch with us today to discuss your needs, and let’s work together to make your space more efficient, safe, and welcoming.
        </p>
      </div>
      <button 
        className="quote-button" 
        onClick={() => navigate('/quote')}
      >
     Request a Quote Today
      </button>
    </div>
  );
};

export default Requestquote;
