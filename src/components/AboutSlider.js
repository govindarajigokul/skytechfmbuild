import React, { useState } from 'react'
import '../css/AboutSlider.css'
import Man from '../assets/About/worker.png'
import Man_mobile from '../assets/About/worker-mobile.png'
import { useNavigate } from 'react-router-dom';

const AboutSlider = () => {
   const navigate = useNavigate();
   const [ismobile,setIsMobile]=useState(false)

   window.addEventListener('resize',()=>{
      const windowSize=window.innerWidth;
      if (windowSize<=767) {
         setIsMobile(true)
      } else {
         setIsMobile(false)
      }
   })
  return (
   <>
    <div className='slider-container'>
         <div className='slider'>
         <div className='left'>
         <div className='heading'>
            <h1>Empowering Spaces Through Excellence in Facility Management</h1>
         </div>
         <div className='sub-heading'>
            <h3>Delivering innovative, sustainable solutions for all your facility management needs.”</h3>
         </div>
         <div className='active-btn'>
         <div className='btn' onClick={() => navigate('/quote')}>Request a Quote</div>
         </div>
         </div>
         <div className='right-site'>
            <div className='img'>
                <img src={ismobile===false?Man:Man_mobile} alt='facility managment'/>
            </div>
         </div>
         </div>
       
    </div>
    
    </>
  )
}

export default AboutSlider