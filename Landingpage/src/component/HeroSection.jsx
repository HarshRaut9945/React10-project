import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center tracking-wide font-bold leading-tight">
        Virtual build tools
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text block sm:inline'>
          {" "}
          for developers
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg text-center text-neutral-500 max-w-4xl px-4">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-8 sm:my-10 w-full sm:w-auto px-4">
        <a 
          href="#" 
          className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-md text-white font-medium hover:from-orange-600 hover:to-orange-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto text-center'
        >
          Start for free
        </a>
        <a 
          href="#" 
          className="py-3 px-6 rounded-md border border-neutral-700 text-neutral-300 font-medium hover:border-orange-500 hover:text-orange-500 transition-all duration-300 w-full sm:w-auto text-center"
        >
          Documentation
        </a>
      </div>

      {/* Videos */}
      <div className="flex flex-col lg:flex-row mt-6 sm:mt-10 justify-center w-full max-w-7xl gap-4 sm:gap-6 px-4">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-lg shadow-orange-400/50 hover:shadow-orange-400/70 transition-shadow duration-300"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-lg shadow-orange-400/50 hover:shadow-orange-400/70 transition-shadow duration-300"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default HeroSection