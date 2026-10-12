import React from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import ServiceCard3 from '../ServiceCard3'
import image1 from '../../assets/ser-slide/Soft/sub_soft_1.jpg'; 
import image2 from '../../assets/ser-slide/Soft/sub_soft_2.jpg';  
import image3 from '../../assets/ser-slide/Soft/sub_soft_3.jpg'; 
import image4 from '../../assets/ser-slide/Soft/sub_soft_4.jpg'; 
import image5 from '../../assets/ser-slide/Soft/sub_soft_5.jpg'; 
import image6 from '../../assets/ser-slide/Soft/sub_soft_6.jpg'; 
import Slider from '../slider/Slider';
import Requestquote from '../Requestquote';

const Soft = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    
    <div>
        <Navigation />
        
        <Slider images={images} />
        <ServiceCard3/>
        <Requestquote />
         <Footer />
        
    </div>
  )
}

export default Soft