import React from 'react';
import '../css/Servicecard.css';
import first1 from '../assets/icon/h/1.png';
import first2 from '../assets/icon/h/2.png';
import first3 from '../assets/icon/h/3.png';
import first4 from '../assets/icon/h/4.png';
import first5 from '../assets/icon/h/5.png';
import first6 from '../assets/icon/h/6.png';
import { useNavigate } from 'react-router-dom';

const services = [
  { id: 1,
     title: 'Building Maintenance & Repair',
     description: `Our team specializes in structural repairs, masonry work, and refurbishing exteriors. Whether it's routine maintenance or urgent repairs, we ensure your building stays in top condition, preserving its value and safety.`,
     image: first1,
     question: `Need to maintain your building's structure?`,
  },
  { id: 2,
    title: 'Electrical & Power Systems Maintenance',
     description: 'We provide regular maintenance for electrical distribution and power systems to ensure uninterrupted and safe operations. From routine inspections to repair work, we keep your electrical systems running efficiently.',
     image: first2,
     question: 'Worried about power interruptions?'
  },
  { id: 3,
     title: 'Plumbing & Drainage Maintenance',
      description: 'We offer regular checks and maintenance for plumbing systems to prevent leaks, blockages, and other issues. From minor repairs to ongoing care, we ensure your water and drainage systems operate smoothly.', 
      image: first3,
      question: 'Facing plumbing problems?'
  },
  { id: 4,
     title: 'Fire Safety Systems Maintenance', 
     description: `Our team inspects and repairs fire safety systems, including sprinklers, alarms, and emergency exits. Regular maintenance ensures that your fire protection measures are always ready in case of emergencies.`,
     image: first4,
     question: 'Is your building fire-safe?'
  },
  { id: 5,
     title: 'HVAC Systems Maintenance',
     description: `We provide ongoing maintenance for heating, ventilation, and air conditioning systems. From air filter replacements to comprehensive system checks, we help keep your space comfortable year-round.`, 
     image: first5,
     question: 'Need regular HVAC upkeep?'
  },
  { id: 6, 
    title: 'Roofing & Waterproofing Services', 
    description: `Our team specializes in roofing and waterproofing solutions, ensuring your building is protected from the elements. We offer inspections, repairs, and replacements for roofs, along with comprehensive waterproofing services to prevent leaks and water intrusion, safeguarding your building's integrity and longevity.`,
    image: first6,
    question: 'Concerned about leaks or water damage?'
  },
];

const ServiceCard4 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='wwhole'>
        <div className='service-head'>HARD SERVICES</div>
        <div className='service-title'><p>Skytech provides a range of hard services that ensure the structural integrity and functionality of your building. From routine maintenance to repairs, we keep your facility in top condition.</p></div>
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

export default ServiceCard4;
