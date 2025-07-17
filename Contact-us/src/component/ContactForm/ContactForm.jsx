import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import style from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <section className={style.container}>
      <div className={style.contact_form}>
        <div className={style.topbtn}>

          <Button          //props for Button component
            text=" VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button          //props for Button component
            text=" Via call"
            icon={<FaPhoneVolume fontSize="24px" />}
          />

        </div>

  <Button
  isOutline={true} 
   text=" VIA Email Form"   icon={<MdEmail fontSize="24px" />}/>

      </div>

      <div className={style.contact_Image}></div>
      
    </section>
  );
};

export default ContactForm;
