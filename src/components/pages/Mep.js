import React from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import ServiceCard2 from '../ServiceCard2'
import image1 from '../../assets/ser-slide/mep/sub_mep_1.jpg'; 
import image2 from '../../assets/ser-slide/mep/sub_mep_2.jpg'; 
import image3 from '../../assets/ser-slide/mep/sub_mep_3.jpg'; 
import image4 from '../../assets/ser-slide/mep/sub_mep_4.jpg'; 
import image5 from '../../assets/ser-slide/mep/sub_mep_5.jpg'; 
import image6 from '../../assets/ser-slide/mep/sub_mep_6.jpg'; 

import Slider from '../slider/Slider';
import Requestquote from '../Requestquote';

const Mep = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    
    <div>
        <Navigation />
        
        <Slider images={images} />
        <ServiceCard2 />
        <Requestquote />
         <Footer />
        
    </div>
  )
}

export default Mep