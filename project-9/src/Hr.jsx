import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

const Hr = () => {
  return (
    <div>
       <Router>
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/> 
           <Route path='/about' element={<About/>}/> 
           <Route path='/contact' element={<Contact/>}/> 
           <Route path='/services' element={<Services/>}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default Hr
