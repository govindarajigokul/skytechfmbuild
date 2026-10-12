import React from 'react';
import '../css/Servicecard.css';
import first1 from '../assets/icon/f/1.png';
import first2 from '../assets/icon/f/2.png';
import first3 from '../assets/icon/f/3.png';
import first4 from '../assets/icon/f/4.png';
import first5 from '../assets/icon/f/5.png';
import first6 from '../assets/icon/f/6.png';
import { useNavigate } from 'react-router-dom';

const services = [
  { id: 1,
     title: 'HVAC Systems Installation & Maintenance',
     description: 'We provide expert installation and maintenance of air conditioning, ventilation, and heating systems. Whether it’s a large commercial facility or a residential building, our HVAC solutions ensure optimal comfort and energy efficiency.',
     image:first1,
     question:'Need to keep your space cool or cozy?'
    },
  { id: 2,
    title: 'Electrical System Design & Installation',
     description: 'We design and install complete electrical setups, including wiring, power distribution, and lighting systems. Our team ensures your electrical infrastructure is safe, efficient, and capable of supporting all your energy needs.',
     image:first2,
     question:'Need reliable electrical systems?'
    },
  { id: 3,
     title: 'Plumbing & Drainage Systems',
      description: 'Our plumbing and drainage solutions cover everything from installing water supply networks to maintaining drainage systems. We ensure reliable, leak-free plumbing that meets your building’s demands.', 
      image:first3,
      question:'Tired of plumbing issues?'
    },
  { id: 4,
     title: 'Fire Alarm & Detection Systems', 
     description: `We install advanced fire alarm and detection systems, including smoke detectors and emergency alert systems. Protect your building and its occupants with our reliable fire safety solutions.`,
     image:first4,
     question:'Want to improve safety?'
    },
  { id: 5,
     title: 'Building Management Systems (BMS)',
     description: `Our Building Management Systems (BMS) provide automation and monitoring for mechanical and electrical systems. From energy management to system monitoring, we help you control and optimize your building's performance.`, 
     image:first5,
     question:'Looking for smart building automation?'
    },
  { id: 6, 
    title: 'Energy Efficiency Audits & Solutions', 
    description: 'Our energy efficiency audits assess your building’s energy consumption, identifying areas for improvement. We offer tailored solutions such as energy-saving devices, renewable energy integration, and upgrades to existing systems to help you reduce costs and your carbon footprint.',
    image:first6,
    question:'Want to reduce energy costs?'
  },
];

const ServiceCard1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='wwhole'>      
        <div className='service-head'>FITOUT SERVICES</div>
        <div className='service-title'><p>At Skytech, we offer comprehensive fitout services that cover everything from concept to completion. Our team of experts ensures your interiors are designed and built to match your unique requirements, with an emphasis on functionality, aesthetics, and quality craftsmanship.</p>
        </div>
        <div className="container1">
          {services.map((service) => (
            <div className="card-wrapper" key={service.id}>
              <div className="flippable-card">
                <div className="card-inner">
                  {/* Front of the card */}
                  <div className="card-front">
                    <div className='service-img'>
                      <img src={service.image} alt={service.title} className="service-image" />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.question}</p>
                  </div>

                  {/* Back of the card */}
                  <div className="card-back">
                    <p>{service.description}</p>
                    <button onClick={() => navigate('/quote')}>Enquire Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceCard1;
