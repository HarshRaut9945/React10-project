import { useState } from 'react';
import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import style from './ContactForm.module.css';

const ContactForm = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const onVisitSupportChat = () => {
    console.log("Visiting support chat...");
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const text = e.target.text.value;

    setSubmittedData({ name, email, text });

    e.target.reset(); // optional: clears the form
  };

  return (
    <section className={style.container}>
      <div className={style.contact_form}>
        <div className={style.topbtn}>
          <Button
            text="Via Support Chat"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            onClick={onVisitSupportChat}
            text="Via Call"
            icon={<FaPhoneVolume fontSize="24px" />}
          />
        </div>

        <Button
          isOutline={true}
          text="Via Email Form"
          icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmitForm}>
          <div className={style.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>

          <div className={style.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>

          <div className={style.form_control}>
            <label htmlFor="text">Message</label>
            <textarea name="text" id="text" rows="8" required />
          </div>

          <div>
            <Button text="Submit" type="submit" />
          </div>
        </form>

        {/* ✅ Display submitted data */}
        {submittedData && (
          <div className={style.output}>
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.text}</p>
          </div>
        )}
      </div>

      <div className={style.contact_Image}>
        <img src="/contact.svg" alt="Contact" />
      </div>
    </section>
  );
};

export default ContactForm;
