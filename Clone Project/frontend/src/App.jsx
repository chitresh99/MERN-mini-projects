import { useState } from 'react';
import './App.css';
import {Outlet} from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import FeatureSection from './Components/FeatureSection';
import Workflow from './Components/Workflow';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';

function App() {
  

  return (
    <>
    <Navbar/>
    <div classname = 'max-w-7xl mx-auto pt-20 px-6'>
    <HeroSection/>
    </div>
    <FeatureSection/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    <Outlet/>
    </>
  )
}

export default App
