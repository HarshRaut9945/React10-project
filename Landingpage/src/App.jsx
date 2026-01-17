import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import FeatureSection from './component/FeatureSection'
import { WorkflowIcon } from 'lucide-react'
import WOrkFLow from './component/WOrkFLow'
import Pricing from './component/Pricing'
import Testimonials from './component/Testimonials'
const App = () => {
  return (
    <div>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection/>
        <FeatureSection/>
        <WOrkFLow/>
        <Pricing/>
        <Testimonials/>
    </div>
   
    </div>
  )
}

export default App
