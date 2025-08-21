import React from 'react'
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/Firebase';

const ContainerCard = ({ contact }) => {
    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contact", id));
        } catch (error) {
            console.error("Error deleting contact: ", error);
        }
    };

    return (
      <div>
        <div className='bg-yellow-100 flex justify-between items-center p-2 mb-2 rounded'>
          <div className='flex items-center'>
            <HiOutlineUserCircle className='text-orange-500 text-4xl mr-2'/>
            <div>
              <h2 className='font-medium'>{contact.name}</h2>
              <p className='text-sm'>{contact.email}</p>
            </div>
          </div>
          <div className='flex items-center gap-2 text-3xl'>
            <RiEditCircleLine className='text-2xl cursor-pointer' />
            <IoMdTrash 
              onClick={() => deleteContact(contact.id)} 
              className='text-2xl cursor-pointer text-orange-500'
            />
          </div>
        </div>
      </div>
    );
}

export default ContainerCard;
