// import { MdMessage } from "react-icons/md";
import style from './Button.module.css';

const Button = ({ text, icon,isOutline }) => {

  
  return (
    <button className={isOutline ? style.outline_btn :style.primarybtn}>
      
    
      {text}
      {icon}
    </button>
  )
}

export default Button
