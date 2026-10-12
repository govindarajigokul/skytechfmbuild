import React from 'react';
import '../css/Servicecard.css';
import first1 from '../assets/icon/m/1.png';
import first2 from '../assets/icon/m/2.png';
import first3 from '../assets/icon/m/3.png';
import first4 from '../assets/icon/m/4.png';
import first5 from '../assets/icon/m/5.png';
import first6 from '../assets/icon/m/6.png';
import { useNavigate } from 'react-router-dom';

const services = [
  { id: 1,
     title: 'Interior Design & Build',
     description: 'We provide expert installation and maintenance of air conditioning, ventilation, and heating systems. Whether it’s a large commercial facility or a residential building, our HVAC solutions ensure optimal comfort and energy efficiency.',
     image: first1,
     question: 'Looking to refresh your space?'
    },
  { id: 2,
    title: 'Partitioning & False Ceilings',
     description: 'We specialize in installing glass, gypsum, and other partitions that give your rooms flexibility and style. Our false ceilings enhance acoustics, hide utilities, and add a polished finish to any space.',
     image: first2,
     question: 'Need to optimize your space?'
    },
  { id: 3,
     title: 'Carpentry & Joinery',
      description: 'Our skilled carpenters create bespoke furniture and joinery that fit your space perfectly. From cabinets and shelving to intricate wood detailing, we craft pieces that match your needs and aesthetics.', 
      image: first3,
      question: 'Need custom furniture and wooden accents?'
    },
  { id: 4,
     title: 'Flooring Solutions', 
     description: `We offer a wide range of flooring options—tile, hardwood, vinyl, and carpet—suited to your space's function and design. Our expert installation guarantees both beauty and longevity.`,
     image: first4,
     question: 'Looking for durable, stylish flooring?'
    },
  { id: 5,
     title: 'Painting & Wall Finishes',
     description: `Our professional painting and wall finishing services include everything from bold colors to elegant wallpapers. Whether it’s a residential refresh or a commercial upgrade, we ensure smooth and durable finishes.`,
     image: first5,
     question: 'Want to give your walls a fresh new look?'
    },
  { id: 6, 
    title: 'Lighting & Electrical Works', 
    description: 'We provide complete lighting and electrical solutions, installing everything from ambient lighting to energy-efficient systems. Our team ensures safe, precise, and well-planned installations that meet your design and functional needs.',
    image: first6,
    question: 'Ready to brighten up your space?'
  },
];

const ServiceCard2 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='wwhole'>      
        <div className='service-head'>MEP SERVICES</div>
        <div className='service-title'><p>Skytech offers full-scale MEP services to ensure that your building's core systems operate efficiently and safely. From initial installation to routine maintenance, we are committed to providing reliable, cost-effective solutions.</p>
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

export default ServiceCard2;
