import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);

  const toggleMenu=()=>{
    setIsOpen(!isOpen)
  }
  const closeDrawer=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">Web dev Mastery</div>

        <ul className='navbar-links'>
          <button className='close-drawer' onClick={closeDrawer}>
            <FaTimes/>
          </button>
          <li>
            <Link to={'/'} onClick={closeDrawer}>Hone</Link>     
          </li>
          <li>
            <Link to={'/about'} onClick={closeDrawer}>About</Link>
          </li>
          <li>
            <Link to={'/contact'} onClick={closeDrawer}>Services</Link>
          </li>
          <li>
            <Link to={'/services'} onClick={closeDrawer}>Contact</Link>
          </li>
        </ul>

        <div className="menu-icons"  onClick={toggleMenu}>
          {isOpen ? <FaBars/> : <FaBars/>}
         
        </div>
      </div>
    </>

  )
}

export default Navbar
