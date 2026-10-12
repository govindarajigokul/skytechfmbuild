import React from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import ServiceGrid from '../ServiceGrid'
import image1 from '../../assets/ser-slide/fitout/mani_fitout_1.jpg'; 
import image2 from '../../assets/ser-slide/fitout/mani_fitout_2.jpg'; 
import image3 from '../../assets/ser-slide/fitout/mani_fitout_3.jpg'; 
import image4 from '../../assets/ser-slide/hard/mani_hard_1.jpg'; 
import image5 from '../../assets/ser-slide/hard/mani_hard_2.jpg'; 
import image6 from '../../assets/ser-slide/hard/mani_hard_3.jpg'; 
import image7 from '../../assets/ser-slide/mep/mani_mep_1.jpg'; 
import image8 from '../../assets/ser-slide/mep/mani_mep_2.jpg';  

import image9 from '../../assets/ser-slide/Soft/mani_soft_1.jpg'; 
import image10 from '../../assets/ser-slide/Soft/mani_soft_2.jpg'; 

import Slider from '../slider/Slider'

const Services = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8,  image9,image10,];
  return (
    <div>

      <Navigation />
      <Slider images={images} />
      <ServiceGrid />
     
      <Footer />
    </div>
  )
}

export default Services