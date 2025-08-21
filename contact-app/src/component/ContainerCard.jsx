import React from 'react'
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/Firebase';
import AddAndUpdate from './AddAndUpdate';

const ContainerCard = ({ contact, onEdit }) => {
 const[isopen,setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  }
  const onClose = () => {
    setOpen(false);
  }

  
  // Delete contact from Firestore
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      alert("Contact deleted successfully!");
    } catch (error) {
      console.error("Error deleting contact: ", error);
      alert("Failed to delete contact!");
    }
  };

  return (
    <div className="bg-yellow-100 flex justify-between items-center p-3 mb-2 rounded-lg shadow-md">
      {/* Left: User details */}
      <div className="flex items-center">
        <HiOutlineUserCircle className="text-orange-500 text-4xl mr-3" />
        <div>
          <h2 className="font-semibold text-gray-800">{contact.name}</h2>
          <p className="text-sm text-gray-600">{contact.email}</p>
        </div>
      </div>

      {/* Right: Action buttons */}
      <div className="flex items-center gap-3 text-2xl">
        <RiEditCircleLine 
          onClick={() => onEdit?.(contact)} 
          className="cursor-pointer hover:text-blue-500 transition"
        />
        <IoMdTrash 
          onClick={() => deleteContact(contact.id)} 
          className="cursor-pointer text-orange-500 hover:text-red-600 transition"
        />
      </div>
      <AddAndUpdate isOpen={isopen} onClose={onClose}/>
    </div>
  );
};

export default ContainerCard;
