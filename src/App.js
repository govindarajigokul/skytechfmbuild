
import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';  
import Home from './components/pages/Home';
import Error from './components/pages/Error';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Mep from './components/pages/Mep';
import Fitout from './components/pages/Fitout';
import Soft from './components/pages/Soft';
import HardService from './components/pages/HardService';
import Careers from './components/pages/SkytechCareer';
import quote from './components/pages/Quote'
import Quote from './components/pages/Quote';
import Seo from './seo/Seo';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
    <BrowserRouter>
      <Seo />
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/:id' element={<Error/>} />  
        <Route path='/contact' element={<Contact/>} />  
        <Route path='/services' element={<Services/>} />  
        <Route path='/about' element={<About/>} /> 
        <Route path='/mep-service' element={<Mep />} />
        <Route path='/fitout-service' element={<Fitout />} />
        <Route path='/soft-service' element={<Soft />} />
        <Route path='/hard-service' element={<HardService/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/quote' element={<Quote/>} />
        
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;

