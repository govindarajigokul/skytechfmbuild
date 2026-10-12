import React, { useEffect } from 'react'
import Navigation from '../Navigation';
import Slider from '../slider/Slider';
import ServiceGrid from '../ServiceGrid';
import WhatWeDo from '../WhatWeDo';
import Footer from '../Footer';
import LandingPage from '../LandingPage';
import image4 from '../../assets/slides/4.jpg'; 
import image2 from '../../assets/slides/2.png'; 
import image3 from '../../assets/slides/3.jpg';
import image1 from '../../assets/slides/1.png';
import Requestquote from '../Requestquote'
import MissionVision from '../MissionVision';


const Home = () => {
  const images = [image1, image2,image3,image4];
  useEffect(()=> {
    window.scrollTo(0,0)
  },[])
  return (
    <div className='home'>
<Navigation/> 
{/* <Slider images={images} /> */}
<LandingPage/>






<ServiceGrid/>
<Requestquote />
<WhatWeDo/>

<MissionVision />
{/* <Testimonials /> */}
<Footer/>
  </div>                                                      
  )
}

export default Home