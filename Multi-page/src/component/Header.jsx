import React from 'react'
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  return (
   <header className='p-3 shadow-xl'>
          <div className='max-w-[1200px] mx-auto  border border-red-500 flex  items-center'>
             <div className='w-[100px]'>
                <img className='w-full' src="./images/logo.png.png" alt="" />
             </div>

             <div className=''>
               <span className='font-bold  border-b-[3px] border-[black]'> Ratanada </span> jhodhpur, Rajasthan, India
                < FaCaretDown className='inline text-[0.9rem] '  />
             </div>

          </div>
   </header>
  )
}

export default Header
