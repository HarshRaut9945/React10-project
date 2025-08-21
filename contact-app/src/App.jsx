import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from './component/Navbar'
import { IoSearch } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { collection } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { db } from './config/Firebase';
import { HiOutlineUserCircle } from "react-icons/hi";
import ContainerCard from './component/ContainerCard';

const App = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {

      try {

        const contactsRef = collection(db, "contact");
        const snapshot = await getDocs(contactsRef);

        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
        setContacts(contactLists);


      } catch (error) {

      }

    }
    getContacts();
  }, [])

  return (
    < >
      <div className='mx-auto  max-w-[370px] px-4'>
        < Navbar />
        <div className='flex gap-2'>
          <div className='flex flex-grow relative items-center ml-1 '>
            <IoSearch className='absolute text-white text-3xl ' />
            <input type="text" className=' flex-grow  h-10 border border-white bg-transparent rounded-md
          text-white pl-10'/>
          </div>

          <FaRegPlusSquare className=' cursor-pointer text-5xl text-white' />

        </div>

        <div>
          {contacts.map((contact) => (
           <ContainerCard key={contact.id} contact={contact}/>
          ))}
        </div>

      </div>
    </>
  )
}

export default App
