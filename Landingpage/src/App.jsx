import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import FeatureSection from './component/FeatureSection'
const App = () => {
  return (
    <div>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection/>
        <FeatureSection/>
    </div>
   
    </div>
  )
}

export default App
