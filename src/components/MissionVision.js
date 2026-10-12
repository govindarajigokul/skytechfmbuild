import React from 'react';
import '../css/MissionVision.css';  // Import the CSS file
import vision from '../assets/icon/vision1.png';
import mission from '../assets/icon/mission.png';

const MissionVision = () => {
  return (
    <div className="mission-vision-container">
      {/* Vision Section */}
      <div className="vision-section">
        <h1 className="title">Our Vision</h1>
        <img src={vision} alt="Vision" className="vision-image" />
        <div className="vision-content">
          <p>
            Empowering spaces through excellence in facility management.
            We envision becoming the leading provider of innovative and sustainable
            facility management services in the UAE. Our goal is to create environments
            where functionality, safety, and comfort converge, ultimately enhancing the
            quality of life for our clients and their communities.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <h1 className="title">Our Mission</h1>
        <img src={mission} alt="Mission" className="mission-image" />
        <div className="mission-content">
          <ul>
            <li>
              <strong>Comprehensive Solutions:</strong> Offering a full range of facility management services to cater to the diverse needs of businesses and individuals.
            </li>
            <li>
              <strong>Uncompromised Standards:</strong> Upholding the highest levels of safety, sustainability, and efficiency in every project.
            </li>
            <li>
              <strong>Innovation-Driven:</strong> Continuously adopting cutting-edge technologies to deliver scalable, cost-effective solutions.
            </li>
            <li>
              <strong>Customer-Centric Focus:</strong> Building long-term partnerships by providing exceptional customer service and consistent results.
            </li>
          </ul>
          <p>
            We’re here to ensure your space remains functional, safe, clean, and productive,
            so you can focus on what truly matters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
