import React from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import ServiceCard1 from '../ServiceCard1'
import image1 from '../../assets/ser-slide/fitout/sub_fitout_10.jpg'; 
import image2 from '../../assets/ser-slide/fitout/sub_fitout_2.jpg'; 
import image3 from '../../assets/ser-slide/fitout/sub_fitout_3.jpg'; 
import image4 from '../../assets/ser-slide/fitout/sub_fitout_4.jpg'; 
import image5 from '../../assets/ser-slide/fitout/sub_fitout_5.jpg'; 
import image6 from '../../assets/ser-slide/fitout/sub_fitout_6.jpg'; 
import image7 from '../../assets/ser-slide/fitout/sub_fitout_7.jpg'; 
import image8 from '../../assets/ser-slide/fitout/sub_fitout_8.jpg'; 
import image9 from '../../assets/ser-slide/fitout/sub_fitout_9.jpg'; 
import image10 from '../../assets/ser-slide/fitout/sub_fitout_1.jpg'; 
import image11 from '../../assets/ser-slide/fitout/sub_fitout_10.jpg'; 

import Slider from '../slider/Slider';
import Requestquote from '../Requestquote';

const Fitout = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,image11];
  return (
    
    <div>
        <Navigation />
        
        <Slider images={images} />
        <ServiceCard1 />
        <Requestquote />
         <Footer />
        
    </div>
  )
}

export default Fitout