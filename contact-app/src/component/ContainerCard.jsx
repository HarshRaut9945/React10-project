import React from 'react'
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";

const ContainerCard = ({contact}) => {
  return (
    <div>
        <div key={contact.id} className='bg-yellow-100 flex justify-between items-center p-2 mb-2 rounded'>
              <div className='flex items-center'>
                <HiOutlineUserCircle className='text-orange text-4xl mr-2'/>
                <div>
                  <h2 className='font-medium'>{contact.name}</h2>
                  <p className='text-sm'>{contact.email}</p>
                </div>
              </div>
              <div className='flex items-center gap-2 text-3xl'>
                <RiEditCircleLine className='text-2xl cursor-pointer' />
                <IoMdTrash className='text-2xl cursor-pointer text-orange'/>
              </div>
            </div>
    </div>
  )
}

export default ContainerCard
