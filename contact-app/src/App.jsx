import React from 'react'
import Navbar from './component/Navbar'
import { IoSearch } from "react-icons/io5";

const App = () => {
  return (
    < >
      <div className='mx-auto  max-w-[370px] px-4'>
        < Navbar/>
        <div className='flex relative items-center ml-1 '>
          <IoSearch className= 'absolute text-white text-3xl ' />
          <input type="text" className=' flex-grow  h-10 border border-white bg-transparent rounded-md
          text-white pl-10'/>
        </div>

        <div>
          
        </div>
      </div>
    </>
  )
}

export default App
 