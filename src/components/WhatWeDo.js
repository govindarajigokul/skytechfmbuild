import React from 'react';
import '../css/Whatwedo.css';
import '../css/whatweare.css'
import why1 from '../assets/why/why1.jpg';
import why2 from '../assets/why/why2.jpg';
import why3 from '../assets/why/why3.jpg';
import why4 from '../assets/why/why4.jpg';
import t_img from "../assets/About/dubai-skyline.jpg.png";

const services = [
  { 
    id: 1, 
    title: 'Expert Team', 
    description: 'A highly skilled and experienced team that delivers excellence in every project.', 
    image: why1 // Path to the image
  },
  { 
    id: 2, 
    title: 'Tailored Solutions', 
    description: 'Customized service packages designed to meet the specific requirements of each client.', 
    image: why2 // Path to the image
  },
  { 
    id: 3, 
    title: 'Sustainability Focus', 
    description: 'Integrating sustainable practices into our services to minimize environmental impact.', 
    image: why3 // Path to the image
  },
  { 
    id: 4, 
    title: 'Customer Commitment', 
    description: 'A dedication to customer satisfaction through long-lasting partnerships and outstanding service delivery.', 
    image: why4 // Path to the image
  },
];

const  WhatWeDo = () => {

  return (
    <div className='bb'>
   <div className='title-container1'>
        <div className='title-head1'>
          <h1>why choose skytech international ?</h1>
        </div>
        <div className='title-under1'>
          <div className='title-line1'></div>
          <div className='title-image1'>
            <img src={t_img} alt='hi' />
          </div>
          <div className='title-line1'></div>
        </div>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <div 
            className="service-card" 
            key={service.id} 
          >
            <h3>{service.title}</h3>
            <div className="service-image1">
              <img src={service.image} alt={service.title} />
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
