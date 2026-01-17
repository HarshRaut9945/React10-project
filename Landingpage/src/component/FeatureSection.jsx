import React from 'react'
import { features } from "../constants"

const FeatureSection = () => {
  return (
    // Main container with bottom border and minimum height
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px] px-4 sm:px-6 lg:px-8'>
      
      {/* Header Section */}
      <div className="text-center">
        {/* Feature badge - small pill-shaped label */}
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase inline-block">
          Features
        </span>
        
        {/* Main heading with gradient text */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 sm:mt-10 lg:mt-20 tracking-wide font-bold leading-tight px-4">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>

      {/* Features Grid Container */}
      <div className="flex flex-wrap mt-10 lg:mt-20 gap-y-8 sm:gap-y-12">
        {/* Map through features array and create a card for each */}
        {features.map((feature, index) => (
          // Responsive grid item: full width on mobile, 1/2 on tablet, 1/3 on desktop
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4">
            
            {/* Feature card with hover effect */}
            <div className="flex items-start p-4 sm:p-6 rounded-xl hover:bg-neutral-900/50 transition-all duration-300 h-full">
              
              {/* Icon container - circular background with orange accent */}
              <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full border border-neutral-800 hover:border-orange-700 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Text content container */}
              <div className="ml-4 sm:ml-6 flex-1">
                {/* Feature title */}
                <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                  {feature.text}
                </h5>
                
                {/* Feature description */}
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom spacing for section */}
      <div className="pb-10 sm:pb-16 lg:pb-20"></div>
    </div>
  );
};

export default FeatureSection