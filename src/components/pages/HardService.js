import React from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import ServiceCard4 from '../ServiceCard4'
import image1 from '../../assets/ser-slide/hard/sub_hard_1.jpg'; 
import image2 from '../../assets/ser-slide/hard/sub_hard_2.jpg'; 
import image3 from '../../assets/ser-slide/hard/sub_hard_3.jpg'; 
import image4 from '../../assets/ser-slide/hard/sub_hard_4.jpg'; 
import image5 from '../../assets/ser-slide/hard/sub_hard_5.jpg';  
import image6 from '../../assets/ser-slide/hard/sub_hard_6.jpg'; 
import Slider from '../slider/Slider';
import Requestquote from '../Requestquote';

const  HardService = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    
    <div>
        <Navigation />
        
        <Slider images={images} />
        <ServiceCard4 />
        <Requestquote />
         <Footer />
        
    </div>
  )
}

export default HardService