import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import { IoSearch } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './config/Firebase';
import ContainerCard from './component/ContainerCard';
import AddAndUpdate from './component/AddAndUpdate';
import useDisclose from './hooks/useDisclose';

  import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isOpen, onClose, onOpen] = useDisclose();

  useEffect(() => {
    const contactsRef = collection(db, "contact");

    // Listen for real-time updates
    const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setContacts(contactLists);
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          {/* Search */}
          <div className="flex flex-grow relative items-center ml-1">
            <IoSearch className="absolute text-white text-3xl" />
            <input
              type="text"
              className="flex-grow h-10 border border-white bg-transparent rounded-md text-white pl-10"
              placeholder="Search..."
            />
          </div>

          {/* Add button */}
          <FaRegPlusSquare 
            onClick={() => { setSelectedContact(null); onOpen(); }}
            className="cursor-pointer text-5xl text-white"
          />
        </div>

        {/* Contacts list */}
        <div className="flex flex-col gap-3 mt-4">
          {contacts.map((contact) => (
            <ContainerCard
              key={contact.id}
              contact={contact}
              onEdit={(c) => { setSelectedContact(c); onOpen(); }}
            />
          ))}
        </div>
      </div>

      {/* Modal for Add + Update */}
      <AddAndUpdate
        onClose={onClose}
        isOpen={isOpen}
        contact={selectedContact}
      />
        <ToastContainer 
        position='bottom-center'
        />
    </>
  );
};

export default App;
