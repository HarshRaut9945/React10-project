import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/Firebase";
import ContainerCard from "./ContainerCard"; // using your existing card

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  // ✅ Fetch contacts from Firebase
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsRef = collection(db, "contact");
        const snapshot = await getDocs(contactsRef);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(data);
        setFilteredContacts(data); // show all initially
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }
    };

    fetchContacts();
  }, []);

  // ✅ Filter when search changes
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredContacts(contacts);
    } else {
      const results = contacts.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredContacts(results);
    }
  }, [search, contacts]);

  return (
    <div className="p-4">
      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {/* 🟡 Contact Cards */}
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <ContainerCard key={contact.id} contact={contact} />
        ))
      ) : (
        <p className="text-gray-500">No contacts found</p>
      )}
    </div>
  );
};

export default ContactList;
