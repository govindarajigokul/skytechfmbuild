import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../css/sss.css';
import logo from '../assets/logo/dummy-icon.png';
import mep1 from '../assets/service/mep1.png';
import mep2 from '../assets/service/mep2.png';
import fitout1 from '../assets/service/fitout1.png';
import fitout2 from '../assets/service/fitout2.png';
import soft1 from '../assets/service/soft1.png';
import soft2 from '../assets/service/soft2.png';
import hard1 from '../assets/service/hard1.png';
import hard2 from '../assets/service/hard2.png';
import t_img from "../assets/About/dubai-skyline.jpg.png";

const services = [
  { 
    id: 1, 
    title: 'Fitout Services', 
    description: 'These services involve interior construction, renovations, and finishing.', 
    image: fitout2,
    hoverImage: fitout2,
    link: '/fitout-service' // Add link for routing
  },
  { 
    id: 2, 
    title: 'MEP Services', 
    description: 'Mechanical, Electrical, and Plumbing services for building infrastructure.', 
    image: mep2,
    hoverImage: mep2,
    link: '/mep-service' // Add link for routing
  },
  { 
    id: 3, 
    title: 'Soft Services', 
    description: 'These services focus on maintaining a clean, safe, and comfortable environment.', 
    image: soft2,
    hoverImage: soft2,
    link: '/soft-service' // Add link for routing
  },
  { 
    id: 4, 
    title: 'Hard Services', 
    description: 'Services related to the physical structure of the building and equipment.', 
    image: hard2,
    hoverImage: hard2,
    link: '/hard-service' // Add link for routing
  },
];

const ServiceGrid = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  return (
    <div className='bb'>
      <div className='title-container'>
        <div className='title-head'>
          <h1>OUR SERVICES</h1>
        </div>
        <div className='title-under'>
          <div className='title-line'></div>
          <div className='title-image'>
            <img src={t_img} alt='hi' />
          </div>
          <div className='title-line'></div>
        </div>
      </div>
      <div className='description'>
        <p>
        At Skytech international, we provide a comprehensive range of facility management services designed to meet the diverse needs of businesses and residential spaces. From enhancing interiors to maintaining vital building systems, our expertise ensures that every corner of your property operates smoothly and safely.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <div 
            className="service-card" 
            key={service.id}
          >
            <div className="service-image">
              <img
                src={service.image}
                alt={service.title}
                className="default-image"
              />
              <img
                src={service.hoverImage}
                alt={service.title}
                className="hover-image"
              />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <button 
              className="button1" 
              style={{ '--clr': '#7808d0' }} 
              onClick={() => navigate(service.link)} // Redirect to the service page
            >
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
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              Explore
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
