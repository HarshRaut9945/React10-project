import React from 'react';
import Modal from './Modal';
import { Formik, Form, Field } from "formik";
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/Firebase';
import { toast } from 'react-toastify';

const AddAndUpdate = ({ isOpen, onClose, contact }) => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (contact?.id) {
        // Update existing
        const contactRef = doc(db, "contact", contact.id);
        await updateDoc(contactRef, values);
        toast.success("Contact updated successfully!");
      } else {
        // Add new
        const contactRef = collection(db, "contact");
        await addDoc(contactRef, values);
        toast.success("Contact added successfully!");
      }

      resetForm();
      onClose();
    } catch (error) {
      console.error("Error saving contact: ", error);
      toast.error("Something went wrong while saving contact!");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={{
          name: contact?.name || "",
          email: contact?.email || ""
        }}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className="border p-2 rounded w-full mb-2"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="border p-2 rounded w-full mb-2"
              />
            </div>

            <button
              type="submit"
              className="border bg-orange-400 px-3 py-1.5 self-end rounded"
            >
              {contact?.id ? "Update Contact" : "Add Contact"}
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddAndUpdate;
