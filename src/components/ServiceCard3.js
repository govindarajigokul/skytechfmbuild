import React from 'react';
import '../css/Servicecard.css';
import first1 from '../assets/icon/s/1.png';
import first2 from '../assets/icon/s/2.png';
import first3 from '../assets/icon/s/3.png';
import first4 from '../assets/icon/s/4.png';
import first5 from '../assets/icon/s/5.png';
import first6 from '../assets/icon/s/6.png';
import { useNavigate } from 'react-router-dom';

const services = [
  { id: 1,
     title: 'Cleaning & Janitorial Services',
     description: 'We provide daily cleaning, deep cleaning, and specialized services like window and carpet cleaning. Whether it’s routine upkeep or tackling tough spots, our team ensures your environment stays pristine.',
     image: first1,
     question: 'Need spotless spaces every day?'
    },
  { id: 2,
    title: 'Landscaping & Garden Maintenance',
     description: 'We offer comprehensive lawn care, garden maintenance, and outdoor beautification services. From trimming hedges to full garden makeovers, we help create and maintain green spaces that enhance your property’s appeal.',
     image: first2,
     question: 'Want to beautify your outdoor areas?'
    },
  { id: 3,
     title: 'Pest Control Services',
      description: 'Our pest control services include regular inspections and exterminations, keeping rodents, insects, and other pests at bay. We protect your space from infestations, ensuring a healthier, safer environment.', 
      image: first3,
      question: 'Struggling with unwanted guests?'
    },
  { id: 4,
     title: 'Waste Management & Recycling', 
     description: 'We handle the collection and disposal of waste, offering recycling services to minimize environmental impact. Our waste management solutions keep your space clean and compliant with sustainability goals.',
     image: first4,
     question: 'Looking for efficient waste solutions?'
    },
  { id: 5,
     title: 'Security Services',
     description: 'We provide manned guarding, surveillance, and security system management to keep your premises safe. Whether it’s monitoring or on-site personnel, we ensure your property is secure at all times.',
     image: first5,
     question: 'Need round-the-clock protection?'
    },
  { id: 6, 
    title: 'Catering & Hospitality Services', 
    description: 'We offer catering and hospitality services to provide high-quality meals, refreshments, and event catering. From daily meal plans to special events, we create a welcoming environment for everyone.',
    image: first6,
    question: 'Looking to enhance employee and guest satisfaction?'
  },
];

const ServiceCard3 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='wwhole'>
        <div className='service-head'>SOFT SERVICES</div>
        <div className='service-title'><p>At Skytech, we recognize that maintaining a clean, safe, and welcoming environment is just as important as keeping your building's infrastructure intact. Our soft services ensure that your facility remains a comfortable and productive space for all occupants.</p>
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

export default ServiceCard3;
