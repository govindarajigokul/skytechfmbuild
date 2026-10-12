import React from "react";
import "../css/whatweare.css";
import dubai_icon from "../assets/About/dubai-skyline.jpg.png";
import facility_service_img from '../assets/About/FACILITY_SERVES.jpg'
import img from '../assets/About/about2.png'
import shutter from '../assets/About/shutter.png'

const WhatWeAre = () => {
  return (
    <>
      <div className="WhatWeare-container">
        <div className="WhatWeare-head">           
          <h1>Who We Are</h1>
          <div className="head-under-line">
            <div className="line"></div>
            <img src={dubai_icon} alt="" className="WhatWeare-head-img" />
            <div className="line"></div>
          </div>
        </div>
        <div className="WhatWeare-section">
          <div className="section">
            <div className="left-section">
              <div className="img">
              <img
                  src={facility_service_img}
                  alt=""
                />
              </div>
            </div>
            <div className="right-section">
              <p>
                Skytech International is a UAE-based facility management service provider,
                dedicated to delivering top-tier solutions for businesses and
                individuals. With a comprehensive range of services—including
                Fitout, MEP, Hard, and Soft services—we offer everything needed
                to ensure the smooth operation and maintenance of any space.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="left-section">
              <p>
                Whether it’s building infrastructure, interior design,
                mechanical systems, or maintaining a safe and clean environment,
                our skilled team is here to handle it all. We work closely with
                our clients to understand their unique needs and offer tailored
                solutions that enhance the functionality and aesthetics of their
                buildings.
              </p>
            </div>
            <div className="right-section">
              <div className="img">
                <img
                  src={img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Our-commitment">
        <h1>Our Commitment</h1>
        <div className="sections">
          <div className="commitment-img">
            <div className="img">
              <img
                src={shutter}
                alt=""
              />
            </div>
          </div>
          <div className="commitment-content">
            <p>
              At Skytech International, we believe in building lasting relationships with
              our clients by consistently delivering exceptional service. We
              strive to be the trusted partner that helps your space function
              smoothly and look its best, so you can focus on what matters
              most—growing your business.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeAre;
