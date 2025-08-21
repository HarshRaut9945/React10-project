import React from 'react'
import Modal from './Modal'
import { Formik, Form, Field } from "formik";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/Firebase';

const AddAndUpdate = ({ isOpen, onClose }) => {

  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
      onClose(); // close modal after adding
    } catch (error) {
      console.error("Error adding contact: ", error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{ name: '', email: '' }}
          onSubmit={(values, { resetForm }) => {
            addContact(values);
            resetForm(); // clear form after submit
          }}
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
                Add Contact
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdate;
