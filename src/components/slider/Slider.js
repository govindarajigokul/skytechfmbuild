import React, { useState, useEffect } from 'react';
import '../../css/slider.css';

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]); // Keep it as is, so it resets on change

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          key={index}
          style={{ backgroundImage: `url(${image})`,backgroundSize:'100% 100%', backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center', width: '100%',
          }}
        >
          {/* Text overlay on the slide */}
        </div>
      ))}

      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slider;
