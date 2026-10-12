import React from 'react';
import '../css/Landingpage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container" />

      <div className='main-container'>
        <div className='left'>
          <h2>
            Welcome to
          </h2>
          <h1>
            Skytech    <br /> International
          </h1>
          <div className='line'>
            <div className='l-line'></div>
          </div>
          <p>
            Your Partner in Facility Management Excellence
          </p>
        </div>

        <div className='right'>
          <p>
          At Skytech International, an ISO-certified company, we specialize in delivering top-tier facility management services tailored to meet the unique needs of our clients across the UAE. Whether it’s optimizing building functionality, enhancing safety measures, or maintaining a clean and comfortable environment, we are your trusted partner in ensuring your space operates seamlessly.
          </p>
          
          <button className="button" style={{ '--clr': '#7808d0' }} onClick={() => navigate('./services')}>
            <span className="button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="#fc7200"
                ></path>
              </svg>
            </span>
            Explore
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
